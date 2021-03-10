import React ,{useEffect,useState}from 'react';
import ReactDOM from 'react-dom';
import MaterialTable from 'material-table';
import * as ApiCaller from "./../../helpers/index";
import { useCookies, removeCookie } from 'react-cookie';
import Main from '../../components/organisms/Main';

function ListBooking(props) {
    const [folioData, setFolioData] = useState();
    const [cookies] = useCookies(['']);
    const token = cookies.access_token;
    useEffect(() => {
        callApi();
    },[]);
    function callApi() {
        try{
            ApiCaller.handleGet("api/folio/", token)
            .then((res) => {
                setFolioData(res.data.data)
            })
            .catch((err) => {
                console.log(err)
            });
        }
        catch(e) {
            alert(e.message)
        }
    }
    return (
        <Main>
        <div style={{ maxWidth: '100%' }}>
            <MaterialTable
            options={{
                filtering: true,
                exportButton:true,
                search:true
              }}
              localization={{
                pagination: {
                    labelDisplayedRows: '{from}-{to} of {count}'
                },
                toolbar: {
                    nRowsSelected: '{0} row(s) selected'
                },
                header: {
                    actions: 'Actions'
                },
                body: {
                    emptyDataSourceMessage: 'No records to display',
                    filterRow: {
                        filterTooltip: 'Filter'
                    }
                }
            }}
          columns={[
            { title: "Folio ID", field: "id" },
            { title: "Confirm No", field: "confirm_no" },
            { title: "Người đặt", field: "customer_name" },
            { title: "Tình trạng", field: 'status_folio', render: rowData => <span className="text-success" style={{ fontWeight: 'bold', minWidth: '100px' }}>{rowData.status_folio}</span> },
            { title: "Số phòng", field: "room_id" },
            { title: "Rate Code", field: "price_total" },
            { title: "Rate Override", field: "rate_override" },
            { title: "Tiền ứng trước", field: "price_advance" },
            { title: "Ngày đến", field: "date_arrival" },
            { title: "Ngày đi", field: "date_department" },
          ]}
          data={folioData}
          title="Demo Title"
        />
        </div>
        </Main>
    );
}

export default ListBooking;