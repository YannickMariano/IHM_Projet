import React from 'react';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction'; // Importation du plugin pour interactions cliquables
import frLocale from '@fullcalendar/core/locales/fr';

const CustomCalendar = ({ handleDateClick, handleEventClick, event, handleEventContent }) => {
  return (
    <FullCalendar
      plugins={[timeGridPlugin, interactionPlugin]}
      initialView="timeGridWeek"
      dateClick={handleDateClick && handleDateClick}
      eventClick={handleEventClick && handleEventClick}
      events={event}
      // eventChange={handleUpdate(data)}
      locale={frLocale}
      allDaySlot={false}
      slotMinTime="07:30:00"
      slotMaxTime="18:00:00"
      slotDuration="01:30:00"
      expandRows={true}
      eventContent={handleEventContent && handleEventContent}
      // Hide Sunday (index 0) in the week view
      hiddenDays={[0]}
      // autres options et événements ici...
    />
  )
}

export default CustomCalendar;
