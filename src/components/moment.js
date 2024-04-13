import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import '../index.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Button } from 'antd';
import Header from './header';
import { PlusOutlined, SearchOutlined } from '@ant-design/icons';

const MyCustomToolbar = ({ date, label, onNavigate }) => {
 
  const prevMonth = moment(date).subtract(1, 'month').toDate();
  const nextMonth = moment(date).add(1, 'month').toDate();

  const dates = [];
  for (let i = -2; i <= 2; i++) {
    dates.push(moment(date).add(i, 'days').toDate());
  }

  return (
<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <div style={{ display: 'flex', alignItems: 'center', width: 'fit-content' }}>
    <Button 
      onClick={() => onNavigate('PREV', prevMonth)} 
      style={{ border: 'none', background: 'none', marginRight: '10px' }} // Add margin-right for spacing
    >
      {"<"}
    </Button>
    <span style={{ fontWeight: 'bold', marginRight: '10px' }}>{moment(date).format('MMMM YYYY')}</span> {/* Display current month/year with bold font */}
    <Button 
      onClick={() => onNavigate('NEXT', nextMonth)} 
      style={{ border: 'none', background: 'none', marginLeft: '10px' }} // Add margin-left for spacing
    >
      {">"}
    </Button>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
  {dates.map((d, index) => (
    <Button 
      key={index} 
      onClick={() => onNavigate('DATE', d)} // Go to the clicked date
      style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
        justifyContent: 'center',
        background: moment(date).isSame(d, 'day') ? 'linear-gradient(90.95deg, #DEE5FF 0.79%, #809AFF 99.18%)' : 'transparent', // Highlight the selected date
        color: moment(date).isSame(d, 'day') ? 'white' : 'black', // Set font color to white if selected, otherwise black
        border: 'none', 
        padding: '30px 16px', 
        margin: '4px', 
      }}
    >
     <div style={{ fontSize: '13px' }}>{moment(d).format('ddd')}</div> {/* Set font size for day */}
      <div style={{ fontSize: '24px' }}>{moment(d).format('DD')}</div> {/* Set font size for date */}
    </Button>
  ))}
</div>

    </div>
  );
};

const myEventsList = [
  
  {
    start: new Date(2024, 3, 13, 14, 0), // May 13, 2024, 2:00 PM
    end: new Date(2024, 3, 13, 14, 50),   // May 13, 2024, 4:00 PM
    title: 'Event 2'
  },
  {
    start: new Date(2024, 3, 13, 9, 0), // May 13, 2024, 2:00 PM
    end: new Date(2024, 3, 13, 10, 0),   // May 13, 2024, 4:00 PM
    title: 'Event 3'
  },
  
];

const eventPropGetter = (event) => {
    const now = moment();
    if (moment(event.end).isBefore(now)) { 
      return { style: { backgroundColor: '#D3A4F4' , border:'1px solid #D3A4F4'} }; 
    } else {
        return { style: { backgroundColor: '#e0e0e0' , border: '1px solid #e0e0e0', color:'black'} }; 
      }
  };

const localizer = momentLocalizer(moment);

const MyCalendar = (props) => (
  <div className="container">
<div style={{ height: '600px', width: '374px', padding: '20px' }}>
    <Header/>
     <div style={{ textAlign: 'center' }}>
      <h3>WORKOUT SCHEDULE</h3>
    </div>
    <Calendar
      localizer={localizer}
      events={myEventsList}
      startAccessor="start"
      endAccessor="end"
      step={60}
      components={{ toolbar: MyCustomToolbar }}
      style={{ height: 500 }}
      defaultView="day" 
      formats={{ dayHeaderFormat: (date) => moment(date).format("dddd DD") }}
      timeslots={1}
      eventPropGetter={eventPropGetter}
    />
    {/* <div style={{ marginTop: '10px' }}>
      <Button  style={{ marginRight: '10px' }}>Search</Button>
      <Button shape="circle"  style = {{ float:'right'}}icon={<PlusOutlined />} />
    </div> */}
  </div>
  </div>
);

export default MyCalendar;
