import React, {useState} from 'react';
import './styles.scss';
import Sidebar from '../../Components/Sidebar';
import Navbar from '../../Components/Navbar';
import * as XLSX from 'xlsx';
import DataTable from 'react-data-table-component';

function MassRegistration() {
  const [columns, setColumns] = useState([]);
  const [data, setData] = useState([]);
  const [msg,updatedmsg] = useState('');


  const processData = dataString => {
    const dataStringLines = dataString.split(/\r\n|\n/);
    const headers = dataStringLines[0].split(/,(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)/);
 
    const list = [];
    for (let i = 1; i < dataStringLines.length; i++) {
      const row = dataStringLines[i].split(/,(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)/);
      if (headers && row.length == headers.length) {
        const obj = {};
        for (let j = 0; j < headers.length; j++) {
          let d = row[j];
          if (d.length > 0) {
            if (d[0] == '"')
              d = d.substring(1, d.length - 1);
            if (d[d.length - 1] == '"')
              d = d.substring(d.length - 2, 1);
          }
          if (headers[j]) {
            obj[headers[j]] = d;
          }
        }

        if (Object.values(obj).filter(x => x).length > 0) {
          list.push(obj);
        }
      }
    }
 
    const columns = headers.map(c => ({
      name: c,
      selector: c,
    }));
 
    setData(list);
    setColumns(columns);
  }
  const handleFileUpload = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (evt) => {
      const bstr = evt.target.result;
      const wb = XLSX.read(bstr, { type: 'binary' });
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname]
      const data = XLSX.utils.sheet_to_csv(ws, { header: 1 });
      processData(data);
    };
    try{
      reader.readAsBinaryString(file);
    }
    catch(e){
      console.log(e)
    }
    
  }
  return (
    <div>
      <Navbar />
      <div style = {{width:'25%', position:'fixed',zIndex:'1',overflow:'auto'}}>
		<Sidebar/>
		</div>
		<div style = {{paddingLeft:'30%', paddingTop: '2%'}}>
			<h1>Mass Registration</h1>
      <label class="custom-file-upload">
          <input
            type="file"
            accept=".csv,.xlsx,.xls"
            onChange={handleFileUpload}
            //onClick = {(e)=>{updatedmsg('Uploading')}}
          />
          Custom Upload
      </label>
      <span>{msg}</span>
      <DataTable
        pagination
        highlightOnHover
        columns={columns}
        data={data}
      />
		</div>
    </div>
  );
}

export default MassRegistration;