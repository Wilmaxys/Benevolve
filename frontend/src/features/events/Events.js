import React from 'react';
import './Events.scss';
import Box from '../../components/box/Box';
import BoxFooter from '../../components/box/footer/BoxFooter';
// import BoxImage from '../../components/box/image/BoxImage';
import BoxTitle from '../../components/box/title/BoxTitle';
import BoxContent from '../../components/box/content/BoxContent';
// import ServerImage from '../../assets/images/server2.jpg';
import Io5Icon from '../../components/icon/Io5Icon';

const Events = () => {
  const events = [
    {
      title: 'Formation react',
      content_lines: [
        {
          title: 'Dates',
          icon: 'IoCalendarNumberOutline',
          value: '12/04/2023 - 14/04/2023'
        },
        {
          title: 'Niveau',
          icon: 'IoBarChartOutline',
          value: 'Débutant'
        },
        {
          title: 'Coût',
          icon: 'IoPricetagsOutline',
          value: '2000$'
        }
      ],
      footer_text: '2/12 participants',
      button_text: 'Rejoindre'
    }
  ];

  return (
    <>
      <div className="title">Nos formations</div>
      <div className="bottom_content">
        <div className="grid_wrapper">
          {events.map((event) => (
            <Box key={event.title}>
              <BoxTitle>{event.title}</BoxTitle>
              <BoxContent>
                {event.content_lines.map((line) => (
                  <div key={line.title} className="description">
                    <div className="description_icon">
                      <Io5Icon name={line.icon} />
                    </div>
                    <div className="description_container">
                      <div className="description_header">{line.title}</div>
                      <div className="description_content">{line.value}</div>
                    </div>
                  </div>
                ))}
              </BoxContent>
              <BoxFooter>
                <div className="grid_footer_ip">{event.footer_text}</div>
                <a href="/" className="grid_footer_link">
                  {event.button_text}
                </a>
              </BoxFooter>
            </Box>
          ))}
        </div>
      </div>
    </>
  );
};

export default Events;
