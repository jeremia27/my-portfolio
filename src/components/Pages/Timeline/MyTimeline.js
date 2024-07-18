import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import './MyTimeline.css'

export default function MyTimeline() {
  return (
    <Timeline id="experience" position="alternate-reverse">
      <h1 className='title-timeline'>Experience</h1>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot variant="outlined" style={{color : 'black'}} />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" style={{color: "#254336"}}>
            Bootcamp Java
          </Typography>
          <Typography>Feb 2021</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot variant="outlined" color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }} >
          <Typography variant="h6" component="span" style={{color: "#059212"}}>
            Bitozen Technology
          </Typography>
          <Typography>Fullstack Developer</Typography>
          <Typography>Juni 2021 - Oct 2022</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot variant="outlined" color="secondary">
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" style={{color: "#3FA2F6"}}>
            TOG Indonesia
          </Typography>
          <Typography>Frontend Developer</Typography>
          <Typography>Nov 2022 - Des 2023</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot variant="outlined" color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" style={{color: "#3FA2F6"}}>
            TOG Indonesia
          </Typography>
          <Typography>Fullstack Developer</Typography>
          <Typography>Jan 2024 - Feb 2024</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot variant="outlined" color="secondary">
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" style={{color: "red"}}>
            AIA Financial
          </Typography>
          <Typography>Application Engineer Java</Typography>
          <Typography>Marc 2024 - Present</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}