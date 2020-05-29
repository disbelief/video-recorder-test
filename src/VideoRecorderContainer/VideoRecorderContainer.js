import React, { useEffect, useState, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import { VideoRecorderCamera, VideoRecorderQuality } from '@teamhive/capacitor-video-recorder';
import { Plugins } from '@capacitor/core';

const { VideoRecorder } = Plugins;

const CAMERA_ID = 'video-recorder';

const cameraConfig = () => {
  const width = window.innerWidth;
  const height = window.innerWidth;
  const x = 0;
  const y = Math.ceil((window.innerHeight - height) / 2) + 1;

  return {
    id: CAMERA_ID,
    stackPosition: 'back', // 'front' overlays your app', 'back' places behind your app.,
    x,
    y,
    width, // 'fill',
    height // 'fill'
  };
};

const VideoRecorderContainer = () => {
  console.log('VideoRecorderContainer.render');
  const [isInitialized, setIsInitialized] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const recorderRef = useRef(null);

  useEffect(() => {
    if (recorderRef && recorderRef.current && !isInitialized) {
      console.log('VideoRecorder.onMount initializing camera');
      VideoRecorder.initialize({
        camera: VideoRecorderCamera.FRONT, // Can use BACK
        previewFrames: [cameraConfig()],
        // quality: VideoRecorderQuality.MAX_1080P,
        quality: VideoRecorderQuality.MAX_720P,
        audio: false
      });
      setIsInitialized(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [recorderRef]); // this fires once after mount once a recorderRef is created

  const onRecord = useCallback(() => {
    if (!isRecording && isInitialized) {
      VideoRecorder.startRecording();
      setIsRecording(true);
    }
  }, [isInitialized, isRecording]);

  const onStop = useCallback(() => {
    if (isRecording) {
      (async () => {
        const result = await VideoRecorder.stopRecording();
        setIsRecording(false);
        console.log('Record.result', result);
      })();
    }
  }, [isRecording]);

  return (
    <div>
      <div id={CAMERA_ID} ref={recorderRef}></div>
      {isRecording ? 
        <button onClick={onStop}>Stop</button> :
        <button onClick={onRecord}>Record</button>
      }
    </div>
  );
};
VideoRecorderContainer.propTypes = {};
VideoRecorderContainer.defaultProps = {};

export default VideoRecorderContainer;
