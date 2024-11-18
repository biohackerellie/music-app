import * as React from 'react'

interface PlayerProps {
  audioUrl: string
  title: string;
}

const Player: React.FC<PlayerProps> = ({ audioUrl, title }) => {
  const [soundcloudAvailable, setSoundcloudAvailable] = React.useState(false);
  const [playing, setPlaying] = React.useState(false);
  const [paused, setPaused] = React.useState(false);
  const [currentTime, setCurrentTime] = React.useState(0);
  const [duration, setDuration] = React.useState(0);

  const $embedPlayer = React.useRef<HTMLIFrameElement>(null);
  const $player = 
}
