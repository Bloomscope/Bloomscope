import React, { useState, useEffect } from "react";
import "./styles.scss";
import Sidebar from "../../Components/Sidebar";
import Navbar from "../../Components/Navbar";
import Chart from "./dchart";
import { Bar } from "react-chartjs-2";
import NotLoggedIn from "../../../Register/Pages/notLoggedIn.jsx";
import { useAuth, authFetch, getSessionState } from "../../../auth";
import styled from "styled-components";
import Popup from "reactjs-popup";
import { useNavigate, useLocation } from "react-router";

const Holder = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const options = {
  type: 'bar',
  legend: {
    position: "top",
    labels: {
      generateLabels: function(chart) {
        return Chart.defaults.global.legend.labels.generateLabels
          .apply(this, [chart])
          .filter(function(item, i) {
            return i > 4;
          });
      },
      boxWidth: 8,
      usePointStyle: true
    }
  }
};

function Dashboard() {
  const [logged] = useAuth();
  const access = getSessionState();
  const [schedule, setschedule] = useState([]);
  const [token, settoken] = useState([]);
  const nav = useNavigate();

  const [datas, setdata] = useState({
    labels: [],
    datasets: []
  });

  const CHART_COLORS = [
    "#0090f8",
    // "#33a6f9",
    "#66bcfb",
    // "#8ccdfc",
    "#b2defd",
    // "#d9eefe"
    "#fde76e",
    "#fced86",
    // "#ffffb7",
    "#fefeeb"
  ];
  var data = {};
  var transData = {};

  const makelist = (a) => {
    var list = [];
    for (var i = 0; i < a.length; i++) {
      let opts = {
        title: a[i]["name"],
        has_attempted: a[i]["has_attempted"],
        date: a[i]["date"],
        test_id: a[i]["test_id"],
      };
      list.push(opts);
    }
    setschedule(list);
  };

  const res = async(a)=>{
    var re = []
    // var tl = []
    var d = a["results"];
    console.log(d)
    for(var i = 0 ; i < d.length; i++){
      var data = d[i];
      var results = JSON.parse(data["result"].replaceAll("'" , '"'))
      var p = results["param_wise_result"];
      var score = [];
      if(p["Remember"]) {
        score.push(100*p["Remember"]["correct_resp"]/p["Remember"]["total_questions"])
      }
      else{
        score.push(0)
      }
      if(p["Understand"]) {
        score.push(100*p["Understand"]["correct_resp"]/p["Understand"]["total_questions"])
      }
      else{
        score.push(0)
      }
      if(p["Apply"]) {
        score.push(100*p["Apply"]["correct_resp"]/p["Apply"]["total_questions"])
      }
      else{
        score.push(0)
      }
      if(p["Analyze"]) {
        score.push(100*p["Analyze"]["correct_resp"]/p["Analyze"]["total_questions"])
      }
      else{
        score.push(0)
      }
      if(p["Evaluate"]) {
        score.push(100*p["Evaluate"]["correct_resp"]/p["Evaluate"]["total_questions"])
      }
      else{
        score.push(0)
      }
      if(p["Create"]) {
        score.push(100*p["Create"]["correct_resp"]/p["Create"]["total_questions"])
      }
      else{
        score.push(0)
      }
      var tid = data['test_id']
      p  = authFetch(`/api/test_info?test_id=${tid}`,{
        'methods':'GET',
      })
      .then(r => r.json())
      .then((r) => {
        return (r.name)
      })
      .catch(error => console.log(error))
      var tname = await p
      // tl.push(tname)
      var e = {
        "label": tname,
        "data": score
      }
      re.push(e)
    }
    console.log(re)

    var dd = re.map(
      (i, index) => {
        return {
          label: i.label,
          backgroundColor: CHART_COLORS[index],
          data: i.data,
        };
      }
    );

    var newdataset = [dd];
    var dt = newdataset.flat();
    var som = {
      labels: ["Remember", "Understand", "Apply", "Analyze", "Evaluate", "Create"],
      datasets: dt
    };
    setdata(som);
  }

  useEffect(() => {
    authFetch("/api/get_results", {
      methods: "GET",
    })
      .then((r) => r.json())
      .then((r) => {
        // console.log(r);
        res(r)
      })
      .catch((error) => console.log(error));

    authFetch("/api/get_tests", {
      methods: "GET",
    })
      .then((r) => r.json())
      .then((r) => {
        console.log(r);
        try{
          if(r.msg.includes("expire")){
            alert("Access has been revoked due to inactivity. Please login again to access the dashboard")
            // nav("/signIn")
          }
        }catch(e){}
        if (r.data) makelist(r.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const createToken = (e, testId) => {
    console.log(testId);
    e.preventDefault();
    console.log("You pressed button");
    let opts = {
      reason: token,
      test_id: testId,
    };
    console.log(opts);
    authFetch("/api/create_token", {
      method: "post",
      body: JSON.stringify(opts),
    })
      .then((r) => r.json())
      .then((r) => {
        if (r.status == "success") console.log(r);
        else console.log(r);
      })
      .catch((error) => console.log(error));
    settoken("");
    return false;
  };
  
 
  function reformat(a, title) {
    let questionData = [];
    data = a;
    console.log(data.questions.questions);

    data.questions.questions.map((d, i) => {
      d.data.map((e, i) => {
        try{
        const ans = e["ans"];
        let alt = [];
        const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
        JSON.parse(e["options"].replaceAll("'", '"')).map((op, it) => {
          let option = {
            id: it <= 26 ? alphabet[it] : alphabet[it] + (alphabet[it]),
            text: op["value"],
            isCorrect: op["opt"] == ans,
            isUserAnswer: false,
            opt_type: op["opt_type"]
          };
          alt.push(option);
        });

        let p = [];
        let o = {
          parameter: e["param_id"],
          marks: parseInt(e["marks"]),
        };
        p.push(o);
        let question = {
          id: e["id"],
          text: JSON.parse(e["question"].replaceAll("'", '"'))["value"],
          alternatives: alt,
          explanation: e["explanation"],
          type: "choice",
          parameter: p,
          isAnswered: false,
        };
        console.log(question)
        questionData.push(question);
      }catch(e){console.log("Explanation might be empty")}
      });
    });

    let quizDataa = {
      test_id: a.test_id,
      title: title,
      time: data["duration"],
      questions: questionData,
      results: {},
    };
    console.log(quizDataa);
    return quizDataa;
  }

  function goToTest(e, i) {
    e.preventDefault();
    const test_id = schedule[i].test_id;
    console.log(schedule[i])

    authFetch("/api/quiz", {
      method: "POST",
      body: JSON.stringify({ test_id: test_id }),
    })
      .then((r) => r.json())
      .then((r) => {
        console.log(r)
        try{
          if(r.msg.includes("expire")){
            alert("Access has been revoked due to inactivity. Please login again to access the dashboard")
            // nav("/signIn")
          }
        }catch(e){}
        let title = schedule[i].title
        transData = reformat(r, title);
        console.log(transData);        
    nav("/student/Quiz", { state: { data: transData }});

      })
      .catch((error) => console.log(error));    
  }

  return (
    <>
      {logged && access.type == 1 ? (
        <>
          <Navbar />
          <Holder>
            <div style={{ padding: "0 0.5rem" }}>
              <Sidebar />
            </div>
            <div
              style={{ paddingLeft: "6rem", paddingTop: "1rem", width: "70vw" }}
            >
              <h1>Dashboard</h1>
              <div
                style={{
                  backgroundColor: "white",
                  padding: "1rem",
                  width: "47%",
                  height: "65vh",
                  float: "left",
                }}
              >
                <div style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
                  Progress Chart
                </div>
                <br />
                <div>
                  Each test given is examined on the basis of 6 parameters.
                  These parameters should be worked upon separately. To
                  understand the areas which require work, you can check your
                  progress. This chart analysis displays your journey by
                  comparing your results throughout. You can choose to compare
                  test-wise by only selecting the legends you wish to view and
                  compare.
                </div>
                <br />
                {/* <Chart /> */}
                <Bar data={datas} style={{width:"45vw"}} options={options} />
              </div>
              <div
                style={{
                  backgroundColor: "white",
                  padding: "1rem",
                  width: "44%",
                  height: "65vh",
                  float: "right",
                }}
              >
                <div style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
                  List of tests:
                </div>
                <br />
                <div>
                  Here are all the tests you need to study. These are arranged
                  in chronological order. Make sure to attempt all and learn.
                  You only get a window of time to solve a test, but you can
                  submit a token which on approval will allow you to sit for it
                  again.
                </div>
                <div style={{ overflowY: "scroll" }}>
                  <div style={{ width: "44%", float: "left" }}>
                    <h3>Test Name</h3>
                  </div>
                  <div style={{ width: "44%", float: "right" }}>
                    <h3>Status</h3>
                  </div>
                  {schedule.map((item, i) => (
                    <span key={i}>
                      <div>
                        <div
                          style={{
                            paddingLeft: "10px",
                            marginBottom: "30px",
                            marginTop: "5px",
                            width: "44%",
                            float: "left",
                          }}
                        >
                          {item.title}
                        </div>
                        <div style={{ width: "44%", float: "right" }}>
                          {item.date == -1 ? (
                            <>
                              <button
                                className="custom-button"
                                style={{ backgroundColor: "#D2D2D2" }}
                              >
                                {" "}
                                Yet to give{" "}
                              </button>
                            </>
                          ) : item.date == 0 && item.has_attempted == "True" ? (
                            <>
                              <button
                                className="custom-button"
                                style={{ backgroundColor: "#D2D2D2" }}
                              >
                                {" "}
                                Attempted{" "}
                              </button>
                            </>
                          ) : item.date == 0 &&
                            item.has_attempted == "False" ? (
                            <>
                              <Popup
                                modal
                                trigger={
                                  <button className="custom-button">
                                    {" "}
                                    Attempt{" "}
                                  </button>
                                }
                              >
                                <div className="popup">
                                  <h3>Name: Test1</h3>
                                  <hr />
                                  <b>Test rules:</b>
                                  <div>
                                    1. This is a multiple choice exam
                                    <br />
                                    2. Each question may not carry the same
                                    marks
                                    <br />
                                    3. Only one option is correct
                                    <br />
                                    4. Avoid guessing answers
                                    <br />
                                    5. Emphasize on Higher-Level Thinking
                                    <br />
                                    6. Test comprehension and critical thinking,
                                    not just recall
                                    <br />
                                    7. Make sure to manage your time and not
                                    miss out on questions
                                    <br />
                                    8. Keep the number of questions in mind
                                    <br />
                                    <br />
                                  </div>
                                  <button
                                    onClick={(e) => goToTest(e, i)}
                                    className="custom-button"
                                    type="submit"
                                  >
                                    Start Test
                                  </button>
                                </div>
                              </Popup>{" "}
                            </>
                          ) : item.date == 1 && item.has_attempted == "True" ? (
                            <>
                              <button
                                className="custom-button"
                                style={{ backgroundColor: "#D2D2D2" }}
                              >
                                {" "}
                                Attempted{" "}
                              </button>
                            </>
                          ) : item.date == 1 &&
                            item.has_attempted == "False" ? (
                            <>
                              <Popup
                                modal
                                trigger={
                                  <button
                                    className="custom-button"
                                    style={{ backgroundColor: "#3e3e3e" }}
                                  >
                                    {" "}
                                    Missed{" "}
                                  </button>
                                }
                              >
                                <div className="popup">
                                  <h3>Name: Test3</h3>
                                  <hr />
                                  <b>Submit a token:</b>
                                  <br />
                                  Even though you have missed the exam in the
                                  given time frame, you can attend the exam by
                                  submitting a token. This is where you need to
                                  submit a reason for missing the time frame. If
                                  the token is approved, you will be notified
                                  and another time frame will be assigned to
                                  you.
                                  <br />
                                  <br />
                                  <form>
                                    <input
                                      value={token}
                                      onChange={(e) => {
                                        settoken(e.target.value);
                                      }}
                                      style={{ height: "200px", width: "100%" }}
                                    />
                                    <br />
                                    <button
                                      className="custom-button"
                                      onClick={(e) =>
                                        createToken(e, item.test_id)
                                      }
                                    >
                                      {" "}
                                      Submit{" "}
                                    </button>
                                  </form>
                                </div>
                              </Popup>
                            </>
                          ) : (
                            <></>
                          )}
                        </div>
                      </div>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Holder>
        </>
      ) : (
        <>
          <NotLoggedIn />
        </>
      )}
    </>
  );
}

export default Dashboard;
