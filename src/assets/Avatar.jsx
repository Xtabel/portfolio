
import React, { useEffect, useRef } from 'react'
import { AdorableEyes, AdorableMouth } from './ExtraFeatures';

const Avatar = ({ hover, hoverMedia }) => {
  const pupilLeftRef = useRef(null);
  const pupilRightRef = useRef(null);

  const handleMouseMove = (e) => {
    const pupilLeft = pupilLeftRef.current;
    const pupilRight = pupilRightRef.current;

    if (pupilLeft && pupilRight) {
      const rectLeft = pupilLeft.getBoundingClientRect();
      const rectRight = pupilRight.getBoundingClientRect();

      const centerXLeft = rectLeft.left + rectLeft.width / 2;
      const centerYLeft = rectLeft.top + rectLeft.height / 2;
      const angleLeft = Math.atan2(e.clientY - centerYLeft, e.clientX - centerXLeft);

      const centerXRight = rectRight.left + rectRight.width / 2;
      const centerYRight = rectRight.top + rectRight.height / 2;
      const angleRight = Math.atan2(e.clientY - centerYRight, e.clientX - centerXRight);

      const xLeft = Math.cos(angleLeft) * 5 + 'px'; // Adjust the multiplier for sensitivity
      const yLeft = Math.sin(angleLeft) * 5 + 'px'; // Adjust the multiplier for sensitivity

      const xRight = Math.cos(angleRight) * 5 + 'px'; // Adjust the multiplier for sensitivity
      const yRight = Math.sin(angleRight) * 5 + 'px'; // Adjust the multiplier for sensitivity

      pupilLeft.style.transform = `translate(${xLeft}, ${yLeft})`;
      pupilRight.style.transform = `translate(${xRight}, ${yRight})`;
    }
  };

  useEffect(() => {
    const handleMouseMoveInternal = (event) => {
      handleMouseMove(event);
    };

    document.addEventListener('mousemove', handleMouseMoveInternal);

    return () => {
      document.removeEventListener('mousemove', handleMouseMoveInternal);
    };
  }, []);






  const Mouths = () => {
    return (
      <g xmlns="http://www.w3.org/2000/svg" id="svga-group-mouth-single-move" transform="matrix(1,0,0,1,0,0)">
        <g id="svga-group-mouth-single" transform="matrix(1,0,0,1,0,0)">
          <path id="SvgjsPath3266" d="M100.091 139.322c-4.952 0-6.142-3.033-6.142-3.033 6.246 2.316 11.836-0.124 11.836-0.124S104.446 139.322 100.091 139.322z" fill="url(#SvgjsLinearGradient3267)" opacity="1" />
          <path id="SvgjsPath3270" d="M85.595 129.671c2.677-0.132 7.545-1.077 10.096-0.988 1.319 0.046 2.63 0.953 4.007 1.242 0.958 0.202 3.935-1.1 4.915-1.162 2.572-0.162 7.409 0.744 9.771 0.92 0.13 0.011 0 0 0 0s-5.776 7.727-14.463 7.725C90.09 137.406 85.595 129.671 85.595 129.671S85.463 129.678 85.595 129.671z" fill="#c48d74" stroke="#b57659" strokeWidth="0.75" opacity="1" />
          <path id="SvgjsPath3271" d="M114.739 129.405c-0.045-0.131-0.461-0.189-0.624-0.139 -0.3 0.094-0.663 0.521-1.313 0.686 -0.748 0.191-5.021 1.431-6.193 1.49 -2.365 0.118-4.438 0.943-6.76 0.938 -2.323-0.005-4.34-0.929-6.716-1.058 -1.18-0.065-5.194-1.216-5.947-1.4 -0.65-0.16-0.89-0.574-1.162-0.686 -0.189-0.077-0.652-0.02-0.743 0.105 -0.079 0.107 0.088 0.609 0.2 0.75 0.271 0.336 1.103 0.506 1.667 0.647 0.779 0.199 4.759 1.366 5.949 1.433 2.305 0.13 4.308 1.125 6.612 1.127 2.306 0.003 4.405-0.904 6.729-1.022 1.195-0.062 5.53-1.313 6.332-1.513 0.58-0.146 1.388-0.399 1.672-0.68C114.58 129.95 114.785 129.538 114.739 129.405z" fill="#964d2c" strokeWidth="none" opacity="1" />
          <path id="SvgjsPath3272" d="M99.799 136.138c-3.914 0-7.707-1.246-10.289-3.693 1.36 0.19 2.83 0.207 4.269 0.403 1.773 0.242 3.429 0.921 5.248 1.034 1.968 0.125 3.916-0.495 5.886-0.841 1.644-0.289 4.21-1.067 5.742-1.302C107.729 133.982 103.577 136.138 99.799 136.138zM105.256 131.043c1.49-0.149 3.855-0.879 5.226-1.04 -1.406-0.413-3.829-0.279-5.576-0.441 -1.506-0.139-3.244 0.861-4.817 1.016 -1.774 0.175-2.94-1.233-4.607-1.369 -1.809-0.147-3.787 0.559-5.336 0.915 1.387 0.188 2.877 0.239 4.309 0.517 1.753 0.341 3.405 0.992 5.223 1.054C101.537 131.757 103.419 131.226 105.256 131.043z" fill="#d3a792" strokeWidth="none" opacity="1" />
          <path id="SvgjsPath3273" d="M105.695 133.406c-0.308 0.01-0.625 0.025-0.93 0.051 -0.351 0.028-0.668 0.069-0.961 0.123 -0.538 0.099-1.074 0.233-1.638 0.369 -0.888 0.216-1.726 0.392-2.662 0.391 -0.15 0-0.301-0.007-0.452-0.017 -0.764-0.055-1.521-0.217-2.191-0.412 -0.693-0.204-1.353-0.401-2.019-0.492 -0.128-0.017-0.259-0.029-0.387-0.042 -0.409-0.036-0.836-0.052-1.255-0.063 1.734 1.396 4.128 2.038 6.468 2.041C102.079 135.356 103.946 134.512 105.695 133.406z" fill="#e3c2b3" strokeWidth="none" opacity="1" />
        </g>
      </g>
    )
  }

  const NewMouths = () => {
    return (
      <g xmlns="http://www.w3.org/2000/svg" id="svga-group-mouth-single-move" transform="matrix(1,0,0,1,0,0)">
        <g id="svga-group-mouth-single" transform="matrix(1,0,0,1,0,0)">
          <path id="SvgjsPath3558" d="M99.867 142.685c-4.159 0-7.651-3.162-7.651-3.162 7.261 1.131 16.154-0.671 16.154-0.671S105.119 142.685 99.867 142.685z" fill="#b57659" strokeWidth="none" opacity="1" />
          <path id="SvgjsPath3559" d="M99.869 138.507c-2.691 0.025-8.86-1.635-11.18-2.938 -1.374-0.769-3.749-3.433-5.4-4.788 -0.635-0.521-0.371-1.528 0.466-1.569 2.036-0.099 4.65 0.979 5.876 1.169 2.565 0.389 5.805 1.835 10.195 1.835 3.262 0 6.828-1.15 9.101-1.574 1.367-0.254 4.529-1.376 6.755-1.501 0.838-0.05 1.18 0.777 0.56 1.316 -1.739 1.526-4.526 4.328-6.028 5.112C107.783 136.837 102.294 138.485 99.869 138.507z" fill="#000000" strokeWidth="none" opacity="0.5" />
          <path id="SvgjsPath3560" d="M86.859 129.328c0 0 0.286 2.427 0.722 3.12 0.6 0.954 4.257 2.914 5.717 3.188 0.993 0.184 2.814 0.476 3.816 0.613 1.085 0.148 1.695 0.015 2.791-0.021 1.179-0.038 2.186 0.132 3.336-0.135 0.819-0.19 3.215-0.834 3.997-1.145 0.604-0.242 1.814-0.643 2.364-0.992 0.456-0.288 1.866-1.333 2.146-1.795 0.366-0.605 0.709-2.752 0.709-2.752L86.859 129.328z" fill="#ffffff" strokeWidth="none" opacity="1" />
          <path id="SvgjsPath3561" d="M92.17 129.748c0 0-0.522 5.283-0.568 5.375 -0.047 0.092-0.179-5.375-0.179-5.375H92.17zM94.364 130.335l0.464 5.601 0.298-5.601H94.364zM99.485 131.161l0.579 5.088 0.375-5.176L99.485 131.161zM103.978 130.093c0.973 0.088 1.298 5.446 1.298 5.446l0.134-5.446H103.978zM107.705 129.438c0 0 0.386 5.114 0.44 5.018 0.053-0.097 0.153-5.018 0.153-5.018H107.705zM88.876 129.436l0.283 4.181 0.283-4.181H88.876zM110.375 129.011l0.086 4.38 0.432-4.413L110.375 129.011z" fill="#000000" strokeWidth="none" opacity="0.1" />
          <path id="SvgjsPath3562" d="M116.764 129.126c-1.218-0.406-3.771-0.125-5.061-0.294 -1.83-0.239-5.542-0.409-7.392-0.356 -1.161 0.034-3.449 0.457-4.608 0.484 -1.191 0.027-3.562-0.461-4.751-0.471 -1.888-0.012-5.689 0.214-7.54 0.534 -1.279 0.222-3.89-0.113-4.914 0.475 -0.237 0.137-0.095 0.75 0 0.981 0.862 2.089 4.188 5.489 7.067 7.497 3.698 2.579 7.586 3.38 10.643 3.381 4.035 0.003 8.785-2.247 12.762-5.639 1.758-1.5 3.982-4.091 4.353-5.537C117.512 129.451 117.079 129.231 116.764 129.126zM99.816 136.352c-2.488 0.019-8.26-1.229-10.697-2.494 -1.461-0.759-3.7-2.577-5.226-3.708 -0.588-0.435-0.454-0.789 0.321-0.822 1.882-0.084 5.042 0.944 6.177 1.1 2.371 0.324 5.366 1.531 9.425 1.531 3.013 0 6.312-0.959 8.414-1.311 1.264-0.213 4.833-1.278 6.89-1.384 0.775-0.04 0.926 0.276 0.354 0.727 -1.61 1.271-4.326 3.216-6.055 4.066C107.224 135.139 102.057 136.328 99.816 136.352z" fill="#c48d74" stroke="#b57659" strokeWidth="0.75" opacity="1" />
          <path id="SvgjsPath3563" d="M86.869 134.124c2.588 0.523 8.417 3.611 13.315 3.444 5.105-0.175 12.685-4.745 13.685-4.244 0.373 1.199-9.853 6.985-13.685 7.077C96.747 140.482 85.786 135.485 86.869 134.124zM99.485 131.161c3.109-0.042 6.909-0.442 9.469-1.672 -2.918-1.013-6.938 0.115-9.251 0.168 -3 0.07-5.51-0.934-8.289 0.058C94.069 130.622 96.798 131.198 99.485 131.161z" fill="#d3a792" strokeWidth="none" opacity="1" />
          <path id="SvgjsPath3564" d="M97.732 139.024c-1.881-0.424-1.945-0.596-0.162-0.42 1.09 0.106 2.18 0.132 3.238 0.03 0.141-0.015 0.281-0.029 0.419-0.049 1.195-0.157 2.479-0.546 3.768-1.051 2.015-0.792 2.051-0.6 0.053 0.446 -1.467 0.767-2.831 1.324-3.798 1.44l-0.062 0.007C100.364 139.509 99.123 139.34 97.732 139.024z" fill="#e3c2b3" strokeWidth="none" opacity="1" />
          <path id="SvgjsPath3565" d="M79.599 130.722c0 0-0.561-1.256-0.482-1.724 0.11-0.657 1.521-1.958 1.521-1.958s-0.854 1.498-0.986 1.971C79.523 129.468 79.599 130.722 79.599 130.722zM120.163 130.881c0 0 0.609-1.364 0.523-1.873 -0.119-0.714-1.652-2.127-1.652-2.127s0.929 1.628 1.072 2.142C120.245 129.519 120.163 130.881 120.163 130.881z" fill="#964d2c" strokeWidth="none" opacity="1" />
        </g>
      </g>
    )
  }

  const Eyebrows = () => {
    return (
      <>
        <g xmlns="http://www.w3.org/2000/svg" id="svga-group-eyebrows-left-move" transform="matrix(1,0,0,1,0,0)">
          <g id="svga-group-eyebrows-left-rotate" transform="matrix(1,0,0,1,0,0)">
            <g id="svga-group-eyebrows-left" transform="matrix(1,0,0,1,0,0)">
              <path id="SvgjsPath3719" d="M52.39 76.804c16.406-19.451 43.626-14.324 38.065-11.7C88.527 66.014 68.692 62.075 52.39 76.804z" fill="#2a232b" strokeWidth="none" opacity="1" />
            </g>
          </g>
        </g>
        <g xmlns="http://www.w3.org/2000/svg" id="svga-group-eyebrows-right-move" transform="matrix(1,0,0,1,0,0)">
          <g id="svga-group-eyebrows-right-rotate" transform="matrix(1,0,0,1,0,0)">
            <g id="svga-group-eyebrows-right" transform="matrix(1,0,0,1,0,0)">
              <path id="SvgjsPath3720" d="M147.619 76.796c-10.422-9.39-21.831-11.612-35.751-11.554 -4.2 0.015-3.035-1.712-1.846-2.059C113.752 62.098 133.915 60.618 147.619 76.796z" fill="#2a232b" strokeWidth="none" opacity="1" />
            </g>
          </g>
        </g>
      </>
    )
  }
  return (
    <div style={{
      backgroundColor: '#F0F0F0',
      width: '200px',
      borderRadius: '50%',
      height: '200px',
      overflow: 'hidden',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="250px" height="250px" viewBox="0 0 200 200" style={{ overflow: "hidden !important" }}>
        <defs id="SvgjsDefs1007">
          <radialGradient id="SvgjsRadialGradient2773" cx="100" cy="113" r="40" gradientUnits="userSpaceOnUse" className="svga-on-canvas-facehighlight-gradient-single-0">
            <stop id="SvgjsStop2774" stopOpacity="0.5" stopColor="#d4a792" offset="0" />
            <stop id="SvgjsStop2775" stopOpacity="0" stopColor="#c58e74" offset="0.9" />
          </radialGradient>
          <radialGradient id="SvgjsRadialGradient2777" cx="100" cy="57" r="36" gradientUnits="userSpaceOnUse" className="svga-on-canvas-facehighlight-gradient-single-1">
            <stop id="SvgjsStop2778" stopOpacity="0.5" stopColor="#d4a792" offset="0" />
            <stop id="SvgjsStop2779" stopOpacity="0" stopColor="#c58e74" offset="0.9" />
          </radialGradient>
          <radialGradient id="SvgjsRadialGradient3683" cx="-558.588" cy="-490.918" r="84.646" gradientTransform="matrix(0.096 -0.0248 0.0245 0.0961 140.5478 120.3577)" gradientUnits="userSpaceOnUse" className="svga-on-canvas-eyesiris-gradient-left-1">
            <stop id="SvgjsStop3684" stopOpacity="0.8" stopColor="#ffffff" offset="0" />
            <stop id="SvgjsStop3685" stopOpacity="0" stopColor="#ffffff" offset="1" />
          </radialGradient>
          <radialGradient id="SvgjsRadialGradient3687" cx="-565.337" cy="-492.691" r="84.644" gradientTransform="matrix(0.0991 8.856325e-004 -0.0011 0.0991 130.3774 136.3533)" gradientUnits="userSpaceOnUse" className="svga-on-canvas-eyesiris-gradient-left-2">
            <stop id="SvgjsStop3688" stopOpacity="0.8" stopColor="#ffffff" offset="0" />
            <stop id="SvgjsStop3689" stopOpacity="0" stopColor="#ffffff" offset="1" />
          </radialGradient>
          <linearGradient id="SvgjsLinearGradient3693" x1="122.283" y1="93.047" x2="123.61" y2="91.466" gradientTransform="matrix(1 0 0 1 -52 0)" gradientUnits="userSpaceOnUse" className="svga-on-canvas-eyesiris-gradient-left-5">
            <stop id="SvgjsStop3694" stopOpacity="1" stopColor="#ffffff" offset="0" />
            <stop id="SvgjsStop3695" stopOpacity="0" stopColor="#ffffff" offset="1" />
          </linearGradient>
          <linearGradient id="SvgjsLinearGradient3697" x1="127" y1="85" x2="125" y2="87" gradientTransform="matrix(1 0 0 1 -50 0)" gradientUnits="userSpaceOnUse" className="svga-on-canvas-eyesiris-gradient-left-6">
            <stop id="SvgjsStop3698" stopOpacity="1" stopColor="#ffffff" offset="0" />
            <stop id="SvgjsStop3699" stopOpacity="0" stopColor="#ffffff" offset="1" />
          </linearGradient>
          <linearGradient id="SvgjsLinearGradient3701" x1="130" y1="81" x2="126" y2="85" gradientTransform="matrix(1 0 0 1 -50 0)" gradientUnits="userSpaceOnUse" className="svga-on-canvas-eyesiris-gradient-left-7">
            <stop id="SvgjsStop3702" stopOpacity="1" stopColor="#ffffff" offset="0" />
            <stop id="SvgjsStop3703" stopOpacity="0" stopColor="#ffffff" offset="1" />
          </linearGradient>
          <radialGradient id="SvgjsRadialGradient3706" cx="-578.76" cy="-490.73" r="84.646" gradientTransform="matrix(0.096 -0.0248 0.0245 0.0961 192.4794 119.8404)" gradientUnits="userSpaceOnUse" className="svga-on-canvas-eyesiris-gradient-right-1">
            <stop id="SvgjsStop3707" stopOpacity="0.8" stopColor="#ffffff" offset="0" />
            <stop id="SvgjsStop3708" stopOpacity="0" stopColor="#ffffff" offset="1" />
          </radialGradient>
          <radialGradient id="SvgjsRadialGradient3710" cx="-584.778" cy="-487.329" r="84.644" gradientTransform="matrix(0.0991 8.856325e-004 -0.0011 0.0991 182.3104 135.839)" gradientUnits="userSpaceOnUse" className="svga-on-canvas-eyesiris-gradient-right-2">
            <stop id="SvgjsStop3711" stopOpacity="0.8" stopColor="#ffffff" offset="0" />
            <stop id="SvgjsStop3712" stopOpacity="0" stopColor="#ffffff" offset="1" />
          </radialGradient>
          <linearGradient id="SvgjsLinearGradient3716" x1="120.284" y1="93.047" x2="121.611" y2="91.467" gradientUnits="userSpaceOnUse" className="svga-on-canvas-eyesiris-gradient-right-5">
            <stop id="SvgjsStop3717" stopOpacity="1" stopColor="#ffffff" offset="0" />
            <stop id="SvgjsStop3718" stopOpacity="0" stopColor="#ffffff" offset="1" />
          </linearGradient>
          <linearGradient id="SvgjsLinearGradient3720" x1="127" y1="85" x2="125" y2="87" gradientUnits="userSpaceOnUse" className="svga-on-canvas-eyesiris-gradient-right-6">
            <stop id="SvgjsStop3721" stopOpacity="1" stopColor="#ffffff" offset="0" />
            <stop id="SvgjsStop3722" stopOpacity="0" stopColor="#ffffff" offset="1" />
          </linearGradient>
          <linearGradient id="SvgjsLinearGradient3724" x1="130" y1="81" x2="126" y2="85" gradientUnits="userSpaceOnUse" className="svga-on-canvas-eyesiris-gradient-right-7">
            <stop id="SvgjsStop3725" stopOpacity="1" stopColor="#ffffff" offset="0" />
            <stop id="SvgjsStop3726" stopOpacity="0" stopColor="#ffffff" offset="1" />
          </linearGradient>
          <linearGradient id="SvgjsLinearGradient5004" x1="99.98" y1="171.27" x2="99.98" y2="136.351" gradientUnits="userSpaceOnUse" className="svga-on-canvas-chinshadow-gradient-single-0">
            <stop id="SvgjsStop5005" stopOpacity="0.8" stopColor="#b67759" offset="0" />
            <stop id="SvgjsStop5006" stopOpacity="1" stopColor="#974e2c" offset="0.7" />
          </linearGradient>
          <linearGradient id="SvgjsLinearGradient5008" x1="100" y1="141" x2="100" y2="137" gradientUnits="userSpaceOnUse" className="svga-on-canvas-mouth-gradient-single-0">
            <stop id="SvgjsStop5009" stopOpacity="1" stopColor="#bd8266" offset="0.1" />
            <stop id="SvgjsStop5010" stopOpacity="1" stopColor="#b67759" offset="1" />
          </linearGradient>
          <radialGradient id="SvgjsRadialGradient5220" cx="129.05" cy="85.956" r="15.117" gradientTransform="matrix(-0.9945 0.1042 0.1042 0.9945 192.8274 -12.4637)" gradientUnits="userSpaceOnUse" className="svga-on-canvas-eyesback-gradient-left-0">
            <stop id="SvgjsStop5221" stopOpacity="1" stopColor="#ffffff" offset="0" />
            <stop id="SvgjsStop5222" stopOpacity="1" stopColor="#fcfdfd" offset="0.316" />
            <stop id="SvgjsStop5223" stopOpacity="1" stopColor="#f4f7f8" offset="0.505" />
            <stop id="SvgjsStop5224" stopOpacity="1" stopColor="#e5ecef" offset="0.661" />
            <stop id="SvgjsStop5225" stopOpacity="1" stopColor="#d8e2e7" offset="0.76" />
          </radialGradient>
          <radialGradient id="SvgjsRadialGradient5227" cx="129.049" cy="85.956" r="15.117" gradientTransform="matrix(0.9945 0.1042 -0.1042 0.9945 7.1735 -12.4637)" gradientUnits="userSpaceOnUse" className="svga-on-canvas-eyesback-gradient-right-0">
            <stop id="SvgjsStop5228" stopOpacity="1" stopColor="#ffffff" offset="0" />
            <stop id="SvgjsStop5229" stopOpacity="1" stopColor="#fcfdfd" offset="0.316" />
            <stop id="SvgjsStop5230" stopOpacity="1" stopColor="#f4f7f8" offset="0.505" />
            <stop id="SvgjsStop5231" stopOpacity="1" stopColor="#e5ecef" offset="0.661" />
            <stop id="SvgjsStop5232" stopOpacity="1" stopColor="#d8e2e7" offset="0.76" />
          </radialGradient>
          <radialGradient id="SvgjsRadialGradient5234" cx="129.05" cy="85.956" r="15.117" gradientTransform="matrix(-0.9945 0.1042 0.1042 0.9945 192.8274 -12.4637)" gradientUnits="userSpaceOnUse" className="svga-on-canvas-eyesfront-gradient-left-0">
            <stop id="SvgjsStop5235" stopOpacity="1" stopColor="#ffffff" offset="0" />
            <stop id="SvgjsStop5236" stopOpacity="1" stopColor="#fcfdfd" offset="0.316" />
            <stop id="SvgjsStop5237" stopOpacity="1" stopColor="#f4f7f8" offset="0.505" />
            <stop id="SvgjsStop5238" stopOpacity="1" stopColor="#e5ecef" offset="0.661" />
            <stop id="SvgjsStop5239" stopOpacity="1" stopColor="#d8e2e7" offset="0.76" />
          </radialGradient>
          <radialGradient id="SvgjsRadialGradient5243" cx="121.786" cy="84.496" fx="133.039" fy="84.527" r="16.003" gradientTransform="matrix(0.9998 0.0208 0.0166 -0.7998 -44.9524 149.5433)" gradientUnits="userSpaceOnUse" className="svga-on-canvas-eyesfront-gradient-left-3">
            <stop id="SvgjsStop5244" stopOpacity="1" stopColor="#b67759" offset="0" />
            <stop id="SvgjsStop5245" stopOpacity="0.3" stopColor="#b67759" offset="0.7" />
            <stop id="SvgjsStop5246" stopOpacity="0" stopColor="#c58e74" offset="1" />
          </radialGradient>
          <radialGradient id="SvgjsRadialGradient5248" cx="69.124" cy="107.529" r="29.525" gradientTransform="matrix(1.0336 0 0 1.0336 -1.6792 1.7282)" gradientUnits="userSpaceOnUse" className="svga-on-canvas-eyesfront-gradient-left-4">
            <stop id="SvgjsStop5249" stopOpacity="0" stopColor="#000000" offset="0.95" />
            <stop id="SvgjsStop5250" stopOpacity="0.3" stopColor="#000000" offset="1" />
          </radialGradient>
          <radialGradient id="SvgjsRadialGradient5254" cx="129.049" cy="85.956" r="15.117" gradientTransform="matrix(0.9945 0.1042 -0.1042 0.9945 7.1735 -12.4637)" gradientUnits="userSpaceOnUse" className="svga-on-canvas-eyesfront-gradient-right-0">
            <stop id="SvgjsStop5255" stopOpacity="1" stopColor="#ffffff" offset="0" />
            <stop id="SvgjsStop5256" stopOpacity="1" stopColor="#fcfdfd" offset="0.316" />
            <stop id="SvgjsStop5257" stopOpacity="1" stopColor="#f4f7f8" offset="0.505" />
            <stop id="SvgjsStop5258" stopOpacity="1" stopColor="#e5ecef" offset="0.661" />
            <stop id="SvgjsStop5259" stopOpacity="1" stopColor="#d8e2e7" offset="0.76" />
          </radialGradient>
          <radialGradient id="SvgjsRadialGradient5263" cx="121.786" cy="84.496" fx="133.039" fy="84.527" r="16.003" gradientTransform="matrix(-0.9998 0.0208 -0.0166 -0.7998 244.9525 149.5433)" gradientUnits="userSpaceOnUse" className="svga-on-canvas-eyesfront-gradient-right-3">
            <stop id="SvgjsStop5264" stopOpacity="1" stopColor="#b67759" offset="0" />
            <stop id="SvgjsStop5265" stopOpacity="0.3" stopColor="#b67759" offset="0.7" />
            <stop id="SvgjsStop5266" stopOpacity="0" stopColor="#c58e74" offset="1" />
          </radialGradient>
          <radialGradient id="SvgjsRadialGradient5268" cx="69.124" cy="107.529" r="29.525" gradientTransform="matrix(-1.0336 0 0 1.0336 201.6792 1.7282)" gradientUnits="userSpaceOnUse" className="svga-on-canvas-eyesfront-gradient-right-4">
            <stop id="SvgjsStop5269" stopOpacity="0" stopColor="#000000" offset="0.95" />
            <stop id="SvgjsStop5270" stopOpacity="0.3" stopColor="#000000" offset="1" />
          </radialGradient>
        </defs>
        <g id="svga-group-wrapper">
          <g id="svga-group-backs-single" />
          <g id="svga-group-humanwrap-move" transform="matrix(1,0,0,1,0,0)">
            <g id="svga-group-humanwrap" transform="matrix(1,0,0,1,0,0)">
              <g id="svga-group-hair-back-move" transform="matrix(1,0,0,1,0,0)">
                <g id="svga-group-hair-back" transform="matrix(1,0,0,1,0,0)">
                  <path id="SvgjsPath5513" d="M56.121,137.894c-0.284-3.904-1.705-10.141-3.683-16.807c0,0,3.453,13.279,0.099,24.668c1.421-24.748-3.5-31.88-5.756-39.022c0.653-1.621,5.689,1.326,5.69,1.333C55.797,117.583,57.066,132.609,56.121,137.894z M147.76,110.423c-4.348,10.77-7.406,23.196-2.63,31.81c-1.362-13.107,3.633-24.778,6.497-31.218L147.76,110.423z" fill="#2a232b" stroke="#000000" strokeWidth="1" strokeMiterlimit="10" opacity="1" />
                </g>
              </g>
              <g id="svga-group-humanbody-single">
                <path id="SvgjsPath2780" d="M190.858 199.866c-6.008-10.158-13.474-11.973-19.628-13.936 -6.323-2.016-19.346-3.178-26.449-4.6 -6.86-1.373-23.153-5.789-23.339-13.488 -0.192-8.066 4.291-40.09 4.291-40.09H74.005c0 0 4.487 32.023 4.294 40.09 -0.184 7.699-16.48 12.115-23.341 13.488 -7.104 1.422-20.125 2.584-26.448 4.6 -6.156 1.963-13.624 3.777-19.632 13.936 -3.644 6.16-6.008 16.133-6.008 27.133h194C196.869 215.999 194.509 206.026 190.858 199.866z" fill="#c58e74" strokeWidth="none" opacity="1" stroke="none" />
                <path id="SvgjsPath2781" d="M121.442 167.843c2.495 10.929 18.165 13.698 26.293 15.325 21.909 4.379 33.772 5.134 42.297 19.539 2.903 4.916 5.459 15.864 5.962 24.153 1.835 0.291 0.531-17.432-5.136-26.994 -9.742-16.472-29.089-15.135-46.077-18.535C137.921 179.958 121.628 175.542 121.442 167.843L121.442 167.843zM78.558 167.843c-0.186 7.699-16.479 12.115-23.339 13.488 -16.988 3.4-36.335 2.063-46.077 18.535 -5.667 9.563-6.971 27.285-5.136 26.994 0.503-8.289 3.059-19.237 5.962-24.153 8.524-14.405 20.388-15.16 42.297-19.539C60.393 181.541 76.063 178.771 78.558 167.843L78.558 167.843z" fill="#d4a792" strokeWidth="none" opacity="1" stroke="none" />
                <path id="SvgjsPath2782" d="M51.206 189.513c0 0 28.641 0.299 33.473 1.885 2.314 0.758 8.372 5.633 8.372 5.633s-6.556-3.17-8.658-3.758C79.51 191.909 51.206 189.513 51.206 189.513zM99.795 199.999c2.053-0.041 7.887-3.799 7.887-3.799s-5.574 2.059-7.342 2.16c-1.491 0.086-6.366-1.238-6.366-1.238S98.112 200.032 99.795 199.999zM117.008 192.757c6.75-1.818 29.786-3.23 29.786-3.23s-23.791-0.516-30.51 1.725c-2.252 0.752-7.562 5.16-7.562 5.16S114.786 193.354 117.008 192.757z" fill="#b67759" strokeWidth="none" opacity="1" stroke="none" />
                <path id="SvgjsPath2783" d="M190.858 199.866c-9.741-16.471-29.122-15.142-46.077-18.535 -6.86-1.373-23.153-5.789-23.339-13.488 -0.192-8.066 4.291-40.09 4.291-40.09H74.005c0 0 4.487 32.023 4.294 40.09 -0.184 7.699-16.48 12.115-23.341 13.488 -7.104 1.422-20.125 2.584-26.448 4.6 -6.156 1.963-13.624 3.777-19.632 13.936 -3.644 6.16-6.008 16.133-6.008 27.133h194C196.869 215.999 194.509 206.026 190.858 199.866z" fill="none" stroke="#974e2c" strokeWidth="1.5" opacity="1" />
              </g>
              <g id="svga-group-chinshadow-single">
                <path id="SvgjsPath5003" d="M100.021 171.27c5.607-0.009 13.53-3.627 20.967-8.478 0.485-6.84 1.756-17.341 2.758-25.098 -13.972-1.825-33.828-1.785-47.741 0.101 0.995 7.702 2.249 18.065 2.739 24.877C86.278 167.593 94.344 171.279 100.021 171.27z" fill="url(#SvgjsLinearGradient5004)" opacity="1" />
              </g>
              <g id="svga-group-clothes-single">
                <path id="SvgjsPath5292" d="M1.509 238.026c0.211-43.783 8.946-50.671 43.101-55.823 13.099-1.976 25.278-3.824 31.798-13.197 -1.371-1.441-1.8-3.341-0.473-4.779 -0.706-1.084-0.696-3.223 1.426-3.401 0.198 1.43-0.4 0.875 2.776 2.219 19.874 8.397 27.911 4.119 39.35 0.265 2.39-0.809 2.695-0.969 2.955-2.997 0.506 0.199 0.846 0.559 0.891 0.712 0.56 0.894-0.327 2.033-0.483 2.944 1.049 1.008 0.442 2.331-0.431 3.502 15.514 25.709 65.877 1.542 74.242 44.425 1.391 12.381 1.61 25.702 1.626 26.956C197.287 238.851 66.557 239.192 1.509 238.026z" fill="#cc5f70" strokeWidth="none" opacity="1" />
                <path id="SvgjsPath5293" d="M191.032 202.707c5.877 8.853 4.81 18.807 6.837 24.292 0-11-2.36-20.973-6.011-27.133 -9.742-16.472-26.089-14.936-43.077-18.336 -16.079-3.218-21.88-6.521-25.599-12.503C135.104 189.31 175.119 178.735 191.032 202.707zM76.817 169.027c-3.719 5.981-9.52 9.285-25.599 12.503 -16.988 3.4-33.335 1.864-43.077 18.336 -3.65 6.16-6.011 16.133-6.011 27.133 2.027-5.485 0.96-15.439 6.837-24.292C24.881 178.735 64.896 189.31 76.817 169.027z" fill="#db7c8b" strokeWidth="none" opacity="1" />
                <path id="SvgjsPath5294" d="M75.177 165.438c-2.58 9.201 40.672 8.591 30.123 8.857C96.484 174.524 72.865 172.321 75.177 165.438zM111.789 173.288c10.395-3.424 11.681-7.793 11.681-7.793 -0.05 0.053-0.198 0.512-0.668 0.945 -0.907 0.995-10.79 6.722-12.128 7.167C110.674 173.607 111.118 173.52 111.789 173.288zM105.973 171.604c14.206-1.792 16.845-7.246 16.845-7.246 -4.313 6.62-29.991 10.398-46.95-0.03C83.98 170.032 94.415 173.021 105.973 171.604z" fill="#bd4558" strokeWidth="none" opacity="1" />
                <path id="SvgjsPath5295" d="M196.759 211.875c-8.383-42.978-59.187-18.908-74.22-44.399 0.885-1.192 1.451-2.551 0.38-3.58 0.405-0.852 1.035-2.112 0.51-2.9 -0.061-0.205-0.485-0.629-1.069-0.819l-0.061 0.46c0 0 0 0 0.001 0 -0.278 2.326-1.229 1.798-5.961 3.72 -18.553 7.739-31.947 0.168-38.58-2.399 -0.25-0.07-0.261-0.64-0.261-1.008 -0.002 0.003-0.014 0.005-0.018 0.007l-0.033-0.235c-0.613 0.026-1.382 0.307-1.728 0.886 0 0.01-0.01 0.01-0.01 0.02 -0.357 0.559-0.442 1.75 0.1 2.591 -1.129 1.227-1.058 3.197 0.47 4.8 -15.166 21.719-62.593 2.866-72.31 39.14 -2.093 9.049-2.56 28.104-2.56 29.97 0 0 62.375 1.143 196.89 0.82 0.03-0.01 0.061-0.01 0.09 0C198.389 237.945 198.151 224.264 196.759 211.875zM1.519 237.766c0.27-5.87 0.85-15.73 2.22-25.79 9.012-40.5 55.892-18.97 72.77-42.73 5.653 5.751 24.777 6.521 31.05 4.851 -9.29 1.206-36.968-2.302-31.61-9.7 0.315 0.445 1.567 1.588 2.135 1.629 -0.039 0.077 0.044-0.082 0.002-0.004 -0.227-0.319-1.636-1.794-1.727-2.025 -0.338-0.42-0.451-1.741-0.17-2.21 0.144-0.283 0.475-0.453 0.774-0.562 0.359 2.418-0.533 1.245 7.996 4.361 19.91 7.275 28.574 0.224 35.76-2.25 1.653-0.534 1.917-1.917 1.959-2.43 0.063 0.048 0.118 0.095 0.132 0.14 0.643 0.79 0.121 1.876-0.19 2.841 -0.01 0.01-0.01 0.029-0.02 0.04 -0.213 0.564-0.601 1.341-0.949 1.841 0.569-0.422 0.846-1.043 1.148-1.621 2.183 2.98-8.034 7.582-11.37 9.25 1.98-0.792 7.546-1.585 10.921-5.69 16.262 27.701 70.326-0.145 74.72 52.261 0.903 10.771 0.804 9.778 1.22 18.81C95.539 237.251 111.997 237.184 1.519 237.766z" fill="#9e1a2f" strokeWidth="none" opacity="1" />
              </g>
              <g id="svga-group-head" transform="matrix(1,0,0,1,0,0)">
                <g id="svga-group-ears-left-move" transform="matrix(1,0,0,1,0,0)" style={{}}>
                  <g id="svga-group-ears-left" transform="matrix(1,0,0,1,0,0)">
                    <path id="SvgjsPath5215" d="M47.001 83.974c-1.376-2.313-5.638-7.997-9.98-6.603 -2.749 0.882-3.293 3.765-3.735 6.311 -0.588 3.386 0.471 10.083 1.389 12.503 0.881 2.325 3.533 6.816 5.264 8.527 2.13 2.1 4.775 8.793 5.194 9.487 0.66 1.097 1.536 2.745 4.122 2.538 2.853-0.229 4.584-1.742 5.856-1.999C58.253 114.109 50.582 89.995 47.001 83.974z" fill="#c58e74" stroke="#974e2c" strokeWidth="1.5" opacity="1" />
                    <path id="SvgjsPath5216" d="M44.197 97.997c-0.132-0.548 0.007-1.47 0.142-2.362 0.124-0.812 0.24-1.579 0.169-2.121 -0.267-2.032-1.773-5.893-2.757-7.985 -1.132-2.407-2.963-5.439-5.262-6.221 -0.95-0.324-1.575 0.063-1.938 0.456 -0.266 0.289-0.325 0.627-0.238 0.667 0.086 0.04 0.285-0.24 0.572-0.504 0.235-0.216 0.579-0.402 1.051-0.363 -0.19 1.011-1.167 6.49-0.744 10.225 0.333 2.938 1.593 5.131 1.79 5.46 0.029 0.346 0.077 0.685 0.148 1.014 0.929 4.287 4.971 9.163 6.378 10.758 0.259 0.295 0.531 0.47 0.598 0.398 0.066-0.072-0.094-0.364-0.353-0.66 -1.388-1.585-5.391-6.442-6.289-10.579 -0.952-4.389 2.318-10.896 3.048-12.272 0.371 0.646 0.687 1.267 0.93 1.785 0.19 0.406 0.402 0.881 0.619 1.395 -0.429 0.718-3.434 5.958-2.338 10.153 0.406 1.546 2.235 3.54 3.447 4.086 0.667 0.301 0.919 0.75 1.209 1.271 0.336 0.604 0.718 1.288 1.828 1.784 0.225 0.102 0.429 0.142 0.61 0.142 0.313 0 0.551-0.126 0.725-0.276 0.018 0.266 0.017 0.604 0.009 0.917 -0.012 0.404 0.042 0.737 0.137 0.745 0.094 0.008 0.196-0.313 0.207-0.717 0.016-0.496 0.013-1.11-0.072-1.403 -0.248-0.865-1.008-1.841-1.813-2.875C45.221 99.896 44.403 98.844 44.197 97.997zM36.95 94.196c-2.177-6.731 0.656-12.54 1.144-13.464 0.85 0.775 1.6 1.811 2.21 2.824C39.86 84.365 37.041 89.669 36.95 94.196zM46.341 104.042c-1.004-0.447-1.339-1.051-1.666-1.633 -0.293-0.527-0.598-1.072-1.369-1.42 -0.168-0.075-0.352-0.191-0.542-0.323 -2.486-5.906 0.272-8.488 0.963-9.017 0.211 0.722 0.369 1.384 0.439 1.915 0.063 0.488-0.052 1.263-0.167 2.012 -0.142 0.929-0.286 1.89-0.137 2.512 0.226 0.926 1.069 2.009 1.884 3.057 0.723 0.929 1.466 1.888 1.721 2.67C47.359 103.972 47.017 104.345 46.341 104.042z" fill="#974e2c" strokeWidth="none" opacity="1" />
                  </g>
                </g>
                <g id="svga-group-ears-right-move" transform="matrix(1,0,0,1,0,0)" style={{}}>
                  <g id="svga-group-ears-right" transform="matrix(1,0,0,1,0,0)">
                    <path id="SvgjsPath5217" d="M152.736 83.974c1.377-2.313 5.639-7.997 9.98-6.603 2.75 0.882 3.293 3.765 3.736 6.311 0.588 3.386-0.471 10.083-1.389 12.503 -0.881 2.325-3.533 6.816-5.266 8.527 -2.129 2.1-4.775 8.793-5.193 9.487 -0.658 1.097-1.535 2.745-4.121 2.538 -2.854-0.229-4.584-1.742-5.857-1.999C141.484 114.109 149.156 89.995 152.736 83.974z" fill="#c58e74" stroke="#974e2c" strokeWidth="1.5" opacity="1" />
                    <path id="SvgjsPath5218" d="M153.727 100.913c-0.805 1.033-1.564 2.009-1.813 2.875 -0.086 0.293-0.088 0.907-0.072 1.403 0.012 0.404 0.113 0.725 0.207 0.717s0.148-0.341 0.137-0.745c-0.008-0.313-0.008-0.651 0.01-0.917 0.174 0.15 0.412 0.276 0.725 0.276 0.182 0 0.385-0.04 0.609-0.142 1.109-0.496 1.492-1.18 1.828-1.784 0.289-0.52 0.543-0.969 1.209-1.271 1.213-0.546 3.041-2.54 3.447-4.086 1.096-4.194-1.908-9.435-2.338-10.153 0.217-0.513 0.43-0.988 0.619-1.395 0.244-0.518 0.559-1.139 0.93-1.785 0.73 1.377 4 7.883 3.049 12.272 -0.896 4.137-4.9 8.994-6.289 10.579 -0.258 0.296-0.418 0.588-0.352 0.66 0.066 0.071 0.338-0.104 0.598-0.398 1.406-1.596 5.449-6.471 6.379-10.758 0.07-0.329 0.117-0.668 0.146-1.014 0.197-0.329 1.459-2.523 1.791-5.46 0.422-3.735-0.555-9.214-0.744-10.225 0.473-0.039 0.814 0.146 1.051 0.363 0.287 0.264 0.486 0.544 0.572 0.504s0.027-0.378-0.238-0.667c-0.363-0.393-0.988-0.779-1.938-0.456 -2.299 0.782-4.131 3.814-5.262 6.221 -0.984 2.093-2.49 5.953-2.758 7.985 -0.072 0.542 0.045 1.309 0.17 2.121 0.135 0.892 0.273 1.814 0.141 2.362C155.336 98.844 154.518 99.896 153.727 100.913zM159.434 83.555c0.611-1.013 1.361-2.049 2.211-2.824 0.488 0.925 3.32 6.733 1.145 13.464C162.697 89.669 159.879 84.365 159.434 83.555zM152.27 103.816c0.254-0.782 0.998-1.741 1.721-2.67 0.816-1.048 1.658-2.131 1.885-3.057 0.148-0.622 0.004-1.583-0.137-2.512 -0.115-0.749-0.23-1.524-0.166-2.012 0.068-0.531 0.227-1.193 0.438-1.915 0.691 0.529 3.449 3.111 0.965 9.017 -0.191 0.132-0.375 0.248-0.543 0.323 -0.771 0.348-1.074 0.893-1.369 1.42 -0.326 0.582-0.662 1.186-1.666 1.633C152.721 104.345 152.379 103.972 152.27 103.816z" fill="#974e2c" strokeWidth="none" opacity="1" />
                  </g>
                </g>
                <g id="svga-group-faceshape-wrap" transform="matrix(1,0,0,1,0,0)">
                  <g id="svga-group-faceshape-single">
                    <path id="SvgjsPath5000" d="M158.785 76.762l-0.005 0c-0.012 0.053-10.717 44.373-18.919 56.95 -6.452 9.895-28.166 25.54-39.84 25.558 -11.671 0.02-33.437-15.559-39.918-25.433C51.861 121.285 41.017 77 41.005 76.946h-0.001c-1.298-4.911-1.994-10.066-2.002-15.382C38.949 28.09 66.155 0.919 99.773 0.867c33.621-0.052 60.913 27.033 60.964 60.507C160.746 66.69 160.068 71.846 158.785 76.762z" fill="#c58e74" strokeWidth="none" opacity="1" />
                    <path id="SvgjsPath5001" d="M125.766 6.622c19.104 10.248 32.075 30.355 32.039 53.476 -0.009 5.316-0.704 10.471-2.003 15.382h-0.001c-0.012 0.053-10.856 44.339-19.099 56.891 -5.946 9.061-24.555 25.121-36.833 25.121 -12.279 0-30.886-16.061-36.833-25.121 -8.242-12.552-19.086-56.837-19.098-56.891h-0.001c-1.298-4.911-1.994-10.066-2.002-15.382C41.898 36.977 54.87 16.87 73.972 6.622 53.277 16.324 38.963 37.28 39.001 61.564c0.008 5.316 0.704 10.471 2.002 15.382h0.001c0.012 0.053 10.856 44.339 19.098 56.891 4.416 6.728 15.922 16.095 26.5 21.382 -0.529-0.226-1.062-0.466-1.599-0.717 5.408 2.875 10.664 4.763 14.713 4.768 0.049 0 0.103-0.005 0.152-0.005s0.103 0.005 0.152 0.005c4.049-0.005 9.305-1.893 14.714-4.768 -0.538 0.253-1.071 0.491-1.601 0.718 10.577-5.287 22.085-14.655 26.501-21.383 8.242-12.552 19.087-56.837 19.098-56.891h0.002c1.298-4.911 1.994-10.066 2.002-15.382C160.775 37.28 146.462 16.324 125.766 6.622z" fill="#bd8266" strokeWidth="none" opacity="1" />
                    <path id="SvgjsPath5002" d="M158.785 76.762l-0.005 0c-0.012 0.053-10.717 44.373-18.919 56.95 -6.452 9.895-28.166 25.54-39.84 25.558 -11.671 0.02-33.437-15.559-39.918-25.433C51.861 121.285 41.017 77 41.005 76.946h-0.001c-1.298-4.911-1.994-10.066-2.002-15.382C38.949 28.09 66.155 0.919 99.773 0.867c33.621-0.052 60.913 27.033 60.964 60.507C160.746 66.69 160.068 71.846 158.785 76.762z" fill="none" stroke="#974e2c" strokeWidth="1.5" opacity="1" />
                  </g>
                </g>
                {!hover && !hoverMedia ?
                  <g id="svga-group-mouth-single-move" transform="matrix(1,0,0,1,0,0)">
                    <g id="svga-group-mouth-single" transform="matrix(1,0,0,1,0,0)">
                      <path id="SvgjsPath5007" d="M99.867 141.087c-4.159 0-7.258-4.297-7.258-4.297 7.261 3.32 14.915 0 14.915 0S103.516 141.087 99.867 141.087z" fill="url(#SvgjsLinearGradient5008)" opacity="1" />
                      <path id="SvgjsPath5011" d="M112.127 131.943c0 0.625-7.773 3.456-12.258 3.575 -4.18 0.112-12.333-2.682-12.333-3.575 0-0.892 6.441-1.558 12.729-1.558C106.555 130.386 112.127 131.052 112.127 131.943z" fill="#ffffff" strokeWidth="none" opacity="1" />
                      <path id="SvgjsPath5012" d="M95.441 127.853c0.99-0.131 2.728 0.908 4.824 0.909 1.541 0.002 3.426-1.067 4.612-0.909 2.529 0.341 3.857 1.882 10.491 2.47 0 0-3.22 1.083-4.075 1.15 -2.72 0.216-7.215-0.169-11.287-0.181 -4.556-0.02-8.941 0.43-11.697 0.301 -0.994-0.051-3.941-1.137-3.941-1.137C89.901 130.196 92.547 128.235 95.441 127.853zM84.369 130.818c0 0 4.514 3.538 6.253 4.76 2.007 1.411 5.029 3.623 9.474 3.557 3.563-0.058 6.641-1.816 8.477-2.986 1.978-1.259 6.796-5.463 6.796-5.463 -2.77 0.633-2.77 0.633-4.075 1.149 -2.741 1.084-7.477 2.722-11.173 2.722 -4.563 0-8.936-1.639-11.811-2.603C86.315 131.286 84.369 130.818 84.369 130.818z" fill="#c58e74" stroke="#b67759" strokeWidth="0.75" opacity="1" />
                      <path id="SvgjsPath5013" d="M115.592 130.572c-0.458 0.663-2.14 0.715-2.888 0.977 -1.098 0.383-2.162 0.856-3.259 1.245 -2.693 0.954-5.51 1.792-8.375 1.98 -5.336 0.351-10.599-1.808-15.596-3.41 -0.424-0.136-0.994-0.175-1.359-0.449 -0.326-0.244-0.015-0.768 0.336-0.701 1.051 0.199 2.092 0.731 3.141 0.994 1.224 0.308 2.583 0.16 3.832 0.113 1.592-0.059 3.184-0.146 4.777-0.207 2.927-0.109 5.842-0.053 8.768 0.059 2.621 0.101 5.366 0.402 7.915-0.332 0.688-0.199 1.379-0.399 2.047-0.656C115.179 130.09 115.94 130.07 115.592 130.572 115.415 130.828 115.632 130.515 115.592 130.572zM108.39 131.773c-3.415 0.013-6.822-0.286-10.24-0.217 -1.874 0.038-3.745 0.139-5.617 0.219 -0.566 0.024-1.625-0.143-2.11 0.204 -0.466 0.334 1.182 0.807 1.325 0.852 3.306 1.039 6.829 1.78 10.304 1.346 1.704-0.214 3.382-0.632 5.023-1.13 0.64-0.195 1.439-0.341 1.987-0.743C109.635 131.883 108.656 131.773 108.39 131.773 107.333 131.777 109.492 131.771 108.39 131.773z" fill="#974e2c" strokeWidth="none" opacity="1" stroke="none" />
                      <path id="SvgjsPath5014" d="M99.901 138.136c-4.165 0-7.465-2.404-10.634-4.801 7.714 2.61 14.222 2.572 21.819-0.346C107.874 135.609 104.215 138.095 99.901 138.136zM93.601 130.478c5.567-0.262 11.102 0.228 16.657 0.047 -1.847-0.453-3.623-1.426-5.512-1.681 -1.452-0.142-2.984 0.918-4.481 0.918 -1.633-0.001-3.113-0.918-4.692-0.918 -2.024 0.27-3.923 1.229-5.881 1.771C90.996 130.593 92.299 130.547 93.601 130.478 95.469 130.39 92.18 130.543 93.601 130.478z" fill="#d4a792" strokeWidth="none" opacity="1" stroke="none" />
                      <path id="SvgjsPath5015" d="M95.134 136.031c1.596 0.319 3.265 0.525 4.987 0.525 1.453 0 3.029-0.222 4.598-0.563 -1.384 0.624-2.973 1.132-4.654 1.141C98.283 137.145 96.471 136.67 95.134 136.031z" fill="#e4c3b4" strokeWidth="none" opacity="1" stroke="none" />
                    </g>
                  </g>
                  : hoverMedia ? <AdorableMouth /> : <NewMouths />}
                <g id="svga-group-eyes-left-move" transform="matrix(1,0,0,1,0,0)">
                  <g id="svga-group-eyes-left" transform="matrix(1,0,0,1,0,0)">
                    <g id="svga-group-eyesback-left">
                      <path id="SvgjsPath5219" d="M61.952 84.523c-0.506-2.285 5.191-3.973 12.711-3.051 7.518 0.923 12.738 5.524 12.052 7.844 -0.38 1.286-10.639 3.245-14.253 2.847C68.798 91.758 63.174 90.04 61.952 84.523z" fill="url(#SvgjsRadialGradient5220)" opacity="1" />
                    </g>
                    <g id="svga-group-eyesiriswrapper-left" transform="matrix(1,0,0,1,-0.75,-0.5)" ref={pupilLeftRef}>
                      <g id="svga-group-eyesiriscontrol-left" transform="matrix(1,0,0,1,0,0)">
                        <g id="svga-group-eyesiris-left" transform="matrix(1,0,0,1,0,0)">
                          <path id="SvgjsPath3681" d="M83.5 87c0 4.694-3.806 8.5-8.499 8.5 -4.694 0-8.501-3.806-8.501-8.5l0 0c0-4.694 3.807-8.5 8.501-8.5C79.694 78.499 83.5 82.305 83.5 87L83.5 87z" fill="#1e1e1e" strokeWidth="none" opacity="1" stroke="none" />
                          <path id="SvgjsPath3682" d="M74.048 78.595c-0.033 0.004-0.066 0.008-0.101 0.012 0.041 0.191 0.081 0.384 0.12 0.575C74.06 78.987 74.055 78.789 74.048 78.595zM74.066 79.18c0.099 2.793 0.262 5.282 0.732 6.183C75.047 84.377 74.625 81.92 74.066 79.18zM74.8 85.365c-0.061 0.236-0.153 0.397-0.294 0.452 -0.142 0.053-0.319-0.008-0.521-0.146 0.058 0.236 0.052 0.422-0.051 0.537 -0.102 0.114-0.285 0.142-0.527 0.11 0.16 0.184 0.242 0.353 0.206 0.5 -0.039 0.148-0.189 0.258-0.415 0.343 0.225 0.088 0.376 0.199 0.411 0.347 0.036 0.148-0.046 0.315-0.205 0.498 0.241-0.029 0.426 0.001 0.525 0.115 0.101 0.114 0.106 0.301 0.05 0.537 0.199-0.137 0.376-0.197 0.518-0.142 0.143 0.053 0.234 0.216 0.291 0.454 0.114-0.215 0.243-0.353 0.396-0.368 0.148-0.02 0.307 0.084 0.466 0.267 0.002-0.244 0.053-0.423 0.181-0.51 0.124-0.086 0.311-0.069 0.537 0.018 -0.11-0.216-0.148-0.398-0.078-0.534 0.071-0.135 0.245-0.207 0.487-0.235 -0.199-0.14-0.321-0.283-0.318-0.436 -0.001-0.153 0.119-0.296 0.321-0.434 -0.241-0.03-0.412-0.103-0.484-0.237 -0.07-0.135-0.031-0.319 0.081-0.535 -0.229 0.085-0.413 0.102-0.538 0.016 -0.126-0.086-0.177-0.267-0.178-0.51 -0.158 0.182-0.316 0.282-0.468 0.262C75.041 85.714 74.911 85.58 74.8 85.365zM75.66 85.471c0.679-0.758 1.446-3.13 2.224-5.813C76.674 82.174 75.662 84.453 75.66 85.471zM77.883 79.657c0.085-0.172 0.172-0.348 0.253-0.524 -0.03-0.011-0.06-0.024-0.09-0.037C77.992 79.284 77.938 79.472 77.883 79.657zM76.377 85.965c0.953-0.357 2.736-2.101 4.671-4.115C78.808 83.517 76.851 85.065 76.377 85.965zM81.048 81.851c0.142-0.106 0.287-0.213 0.433-0.318 -0.021-0.025-0.043-0.047-0.06-0.07C81.297 81.59 81.174 81.722 81.048 81.851zM76.777 86.738c1.01 0.125 3.399-0.591 6.052-1.475C80.068 85.698 77.617 86.159 76.777 86.738zM82.829 85.263c0.156-0.022 0.318-0.048 0.478-0.073 -0.007-0.026-0.013-0.054-0.02-0.081C83.135 85.16 82.979 85.212 82.829 85.263zM76.775 87.606c0.836 0.583 3.284 1.057 6.038 1.505C80.171 88.214 77.786 87.484 76.775 87.606zM82.813 89.111c0.135 0.047 0.271 0.095 0.404 0.138 0.007-0.024 0.013-0.047 0.018-0.071C83.098 89.158 82.954 89.135 82.813 89.111zM76.367 88.375c0.471 0.902 2.42 2.462 4.649 4.142C79.092 90.492 77.32 88.737 76.367 88.375zM81.018 92.514c0.083 0.087 0.17 0.179 0.253 0.268 0.014-0.017 0.027-0.031 0.043-0.046C81.215 92.662 81.113 92.587 81.018 92.514zM75.652 88.867c-0.004 1.019 0.995 3.302 2.191 5.827C77.079 92.006 76.327 89.628 75.652 88.867zM77.844 94.694c0.03 0.106 0.062 0.215 0.09 0.324 0.021-0.008 0.036-0.015 0.055-0.02C77.941 94.896 77.892 94.793 77.844 94.694zM74.788 88.968c-0.476 0.902-0.653 3.386-0.768 6.178C74.594 92.413 75.031 89.958 74.788 88.968zM74.021 95.146c-0.023 0.106-0.044 0.214-0.066 0.323 0.02 0.004 0.035 0.005 0.055 0.007C74.013 95.368 74.018 95.254 74.021 95.146zM73.979 88.657c-0.844 0.576-2.154 2.697-3.553 5.114C72.204 91.617 73.733 89.645 73.979 88.657zM70.427 93.771c-0.074 0.09-0.152 0.185-0.229 0.274 0.018 0.012 0.034 0.02 0.053 0.034C70.309 93.976 70.369 93.873 70.427 93.771zM73.405 88.006c-1.015 0.119-3.16 1.385-5.522 2.875C70.46 89.801 72.726 88.768 73.405 88.006zM67.883 90.884c-0.122 0.051-0.247 0.102-0.372 0.156 0.009 0.019 0.021 0.038 0.033 0.057C67.658 91.027 67.771 90.954 67.883 90.884zM73.198 87.161c-0.951-0.365-3.441-0.238-6.227-0.016C69.755 87.383 72.244 87.521 73.198 87.161zM66.972 87.145c-0.151-0.014-0.308-0.028-0.457-0.041 -0.001 0.027-0.003 0.053-0.001 0.08C66.669 87.169 66.822 87.156 66.972 87.145zM73.407 86.318c-0.67-0.763-2.932-1.809-5.499-2.905C70.259 84.915 72.397 86.196 73.407 86.318zM67.908 83.413c-0.147-0.095-0.297-0.189-0.446-0.285 -0.013 0.026-0.026 0.053-0.041 0.078C67.585 83.276 67.75 83.344 67.908 83.413zM73.985 85.67c-0.239-0.989-1.758-2.967-3.521-5.132C71.849 82.963 73.147 85.09 73.985 85.67zM70.465 80.538c-0.095-0.163-0.188-0.329-0.281-0.494 -0.026 0.018-0.055 0.037-0.079 0.054C70.224 80.245 70.348 80.393 70.465 80.538z" fill="url(#SvgjsRadialGradient3683)" opacity="1" />
                          <path id="SvgjsPath3686" d="M76.255 78.622c-0.034-0.004-0.066-0.01-0.1-0.014 -0.011 0.196-0.022 0.393-0.034 0.586C76.164 79.004 76.211 78.812 76.255 78.622zM76.12 79.193c-0.627 2.724-1.114 5.17-0.892 6.162C75.724 84.467 75.95 81.984 76.12 79.193zM75.229 85.356c-0.119 0.212-0.25 0.344-0.401 0.36 -0.15 0.014-0.306-0.091-0.464-0.276 -0.006 0.243-0.06 0.421-0.188 0.505 -0.128 0.083-0.313 0.063-0.539-0.03 0.107 0.219 0.143 0.403 0.069 0.536 -0.075 0.133-0.249 0.201-0.489 0.224 0.194 0.144 0.312 0.289 0.308 0.441 -0.003 0.152-0.126 0.292-0.327 0.428 0.24 0.034 0.41 0.111 0.478 0.247 0.067 0.136 0.025 0.318-0.091 0.532 0.229-0.081 0.414-0.093 0.537-0.003 0.123 0.088 0.17 0.27 0.164 0.514 0.166-0.177 0.325-0.278 0.478-0.253 0.148 0.02 0.274 0.16 0.382 0.379 0.064-0.236 0.16-0.396 0.306-0.447 0.143-0.051 0.318 0.014 0.515 0.157 -0.051-0.237-0.041-0.423 0.063-0.536s0.29-0.136 0.532-0.102c-0.157-0.187-0.238-0.356-0.195-0.504 0.039-0.148 0.192-0.255 0.423-0.336 -0.226-0.091-0.372-0.206-0.407-0.354 -0.032-0.149 0.053-0.316 0.218-0.495 -0.243 0.023-0.427-0.009-0.524-0.125 -0.099-0.115-0.102-0.303-0.039-0.538 -0.201 0.134-0.38 0.19-0.521 0.132C75.37 85.756 75.281 85.593 75.229 85.356zM76.033 85.683c0.852-0.558 2.206-2.65 3.652-5.04C77.865 82.76 76.298 84.699 76.033 85.683zM79.685 80.641c0.126-0.145 0.255-0.292 0.38-0.44 -0.027-0.019-0.052-0.04-0.078-0.06C79.886 80.31 79.785 80.477 79.685 80.641zM76.597 86.345c1.013-0.099 3.187-1.322 5.577-2.767C79.578 84.609 77.287 85.598 76.597 86.345zM82.173 83.579c0.165-0.065 0.333-0.131 0.501-0.195 -0.014-0.029-0.029-0.056-0.04-0.083C82.481 83.392 82.328 83.487 82.173 83.579zM76.783 87.194c0.943 0.382 3.437 0.309 6.227 0.142C80.231 87.042 77.745 86.853 76.783 87.194zM83.01 87.336c0.158 0.019 0.32 0.036 0.48 0.053 0.001-0.027 0.002-0.055 0.003-0.083C83.332 87.316 83.168 87.326 83.01 87.336zM76.558 88.033c0.655 0.78 2.898 1.871 5.442 3.017C79.679 89.499 77.565 88.177 76.558 88.033zM82 91.049c0.117 0.08 0.236 0.161 0.354 0.238 0.013-0.021 0.024-0.042 0.035-0.063C82.262 91.168 82.129 91.109 82 91.049zM75.964 88.67c0.221 0.993 1.699 3.004 3.419 5.205C78.048 91.419 76.791 89.266 75.964 88.67zM79.384 93.872c0.059 0.106 0.117 0.217 0.176 0.325 0.018-0.013 0.034-0.023 0.053-0.034C79.536 94.065 79.458 93.967 79.384 93.872zM75.146 88.96c-0.267 0.982 0.107 3.447 0.608 6.195C75.711 92.361 75.601 89.87 75.146 88.96zM75.754 95.155c0.002 0.11 0.004 0.224 0.004 0.337 0.021-0.003 0.038-0.005 0.058-0.005C75.796 95.376 75.775 95.264 75.754 95.155zM74.285 88.834c-0.693 0.748-1.508 3.102-2.341 5.769C73.205 92.11 74.265 89.853 74.285 88.834zM71.944 94.603c-0.05 0.096-0.099 0.195-0.147 0.295 0.017 0.008 0.032 0.013 0.051 0.021C71.879 94.815 71.913 94.707 71.944 94.603zM73.584 88.324c-0.964 0.338-2.779 2.048-4.756 4.021C71.104 90.724 73.091 89.215 73.584 88.324zM68.828 92.345c-0.095 0.067-0.194 0.138-0.29 0.206 0.014 0.016 0.027 0.028 0.041 0.045C68.661 92.511 68.746 92.428 68.828 92.345zM73.197 87.546c-1.01-0.148-3.409 0.521-6.078 1.349C69.889 88.518 72.345 88.106 73.197 87.546zM67.119 88.897c-0.131 0.018-0.265 0.034-0.4 0.054 0.005 0.021 0.011 0.042 0.018 0.063C66.865 88.977 66.993 88.936 67.119 88.897zM73.217 86.677c-0.824-0.599-3.263-1.121-6.01-1.627C69.833 86 72.202 86.777 73.217 86.677zM67.207 85.05c-0.143-0.052-0.29-0.106-0.432-0.158 -0.008 0.026-0.016 0.051-0.021 0.077C66.907 84.995 67.06 85.022 67.207 85.05zM73.637 85.917c-0.45-0.911-2.363-2.506-4.561-4.23C70.959 83.747 72.693 85.538 73.637 85.917zM69.076 81.688c-0.118-0.13-0.236-0.26-0.355-0.391 -0.021 0.022-0.041 0.044-0.061 0.065C68.8 81.471 68.941 81.58 69.076 81.688zM74.363 85.44c0.024-1.017-0.93-3.321-2.073-5.868C72.999 82.273 73.704 84.663 74.363 85.44zM72.29 79.572c-0.049-0.182-0.096-0.366-0.144-0.55 -0.029 0.01-0.062 0.021-0.09 0.032C72.134 79.227 72.214 79.401 72.29 79.572z" fill="url(#SvgjsRadialGradient3687)" opacity="1" />
                          <path id="SvgjsPath3690" d="M78.334 87c0 1.842-1.492 3.333-3.333 3.333S71.666 88.841 71.666 87c0-1.841 1.494-3.334 3.335-3.334C76.844 83.666 78.334 85.159 78.334 87z" fill="#1e1e1e" strokeWidth="none" opacity="1" stroke="none" />
                          <path id="SvgjsPath3691" d="M78.334 87c0 1.842-1.492 3.333-3.333 3.333S71.666 88.841 71.666 87c0-1.841 1.494-3.334 3.335-3.334C76.844 83.666 78.334 85.159 78.334 87z" fill="#000000" strokeWidth="none" opacity="0.9" />
                          <path id="SvgjsPath3692" d="M70.35 90.893c0.636-0.427 1.5-0.255 1.927 0.38 0.427 0.637 0.258 1.5-0.379 1.927 -0.638 0.429-1.5 0.258-1.927-0.378C69.544 92.185 69.713 91.32 70.35 90.893L70.35 90.893z" fill="url(#SvgjsLinearGradient3693)" opacity="0.5" />
                          <path id="SvgjsPath3696" d="M77.635 86.536c-0.356 0.53-1.373 0.468-2.275-0.136 -0.903-0.605-1.346-1.526-0.991-2.055l0.001-0.001c0.354-0.53 1.372-0.469 2.274 0.137 0.903 0.604 1.346 1.524 0.992 2.054C77.635 86.536 77.635 86.536 77.635 86.536z" fill="url(#SvgjsLinearGradient3697)" opacity="0.5" />
                          <path id="SvgjsPath3700" d="M81.682 85.121c-0.806 1.237-2.884 1.31-4.641 0.166 -1.756-1.145-2.527-3.075-1.722-4.311 0.806-1.235 2.884-1.31 4.641-0.166C81.715 81.956 82.485 83.887 81.682 85.121L81.682 85.121z" fill="url(#SvgjsLinearGradient3701)" opacity="0.75" />
                        </g>
                      </g>
                    </g>
                    <g id="svga-group-eyesfront-left">
                      <path id="SvgjsPath5241" d="M55.5 88c0 13.807 8.06 24.999 18 24.999s18-11.192 18-24.999c0-13.808-8.06-25-18-25S55.5 74.192 55.5 88zM61.952 84.523c-0.506-2.285 5.191-3.973 12.711-3.051 7.518 0.923 12.738 5.524 12.052 7.844 -0.38 1.286-10.639 3.245-14.253 2.847C68.798 91.758 63.174 90.04 61.952 84.523z" fill="#c58e74" strokeWidth="none" opacity="1" />
                      <path id="SvgjsPath5242" d="M72.462 92.163c3.614 0.398 13.873-1.561 14.253-2.847 0.687-2.32-4.534-6.921-12.052-7.844 -6.46-0.792-11.563 0.345-12.556 2.128 0.898-6.4 7.7-11.397 15.987-11.434 8.911-0.037 16.148 5.676 16.172 12.765 0.021 7.088-7.185 12.862-16.095 12.902 -8.913 0.037-16.149-5.676-16.173-12.764 0-0.105 0.016-0.208 0.019-0.313C63.348 90.083 68.852 91.764 72.462 92.163z" fill="url(#SvgjsRadialGradient5243)" opacity="1" />
                      <path id="SvgjsPath5247" d="M61.952 84.523c-0.506-2.285 5.191-3.973 12.711-3.051 7.518 0.923 12.738 5.524 12.052 7.844 -0.38 1.286-10.639 3.245-14.253 2.847C68.798 91.758 63.174 90.04 61.952 84.523z" fill="url(#SvgjsRadialGradient5248)" opacity="1" />
                      <path id="SvgjsPath5251" d="M62.349 79.417c4.208-1.978 9.35-2.16 13.838-1.005 2.404 0.561 4.965 1.285 7.063 2.638 1.945 1.135 3.525 2.5 5.002 4.19 -1.342-1.701-2.773-3.118-4.623-4.27 -2.276-1.416-4.769-2.294-7.364-2.916C71.678 76.928 66.542 77.184 62.349 79.417z" fill="#974e2c" strokeWidth="none" opacity="1" />
                      <path id="SvgjsPath5252" d="M57.318 80.972c0 0 2.328 0.881 3.595 0.62 -0.39-0.459-1.096-1.604-1.096-1.604s1.853 0.551 3.151 0.032c0.88-0.352 4.065-1 5.456-1.066 1.687-0.082 5.073 0.125 6.735 0.424 3.374 0.608 8.985 2.63 11.678 7.184 0.255 0.572 1.407 0.921 1.407 0.921s-1.02-0.215-1.149 0.042c-0.282 0.561 1.298 2.016 1.496 2.197 -0.161-0.145-1.289-1.135-1.722-0.967 -0.061 0.022-0.137 0.388-0.155 0.482 0.3-2.426-4.838-6.746-12.052-7.604 -7.52-0.894-13.217 0.743-12.711 2.958 1.222 5.348 6.846 7.013 10.51 7.405 2.526 0.271 8.298-0.577 11.675-1.537l1.011-0.317c-1.999 1.009-7.524 2.195-9.767 2.403 -0.744 0.07-2.24 0.104-2.986 0.085 -5.949-0.158-10.16-3.179-11.729-7.26 -0.125-0.328-0.494-0.619-0.838-0.696 -1.604-0.361-5.096-1.811-5.096-1.811 2.32 0.361 3.483 0.674 5.305 0.059C58.257 82.256 57.318 80.972 57.318 80.972z" fill="#000000" strokeWidth="none" opacity="1" />
                    </g>
                  </g>
                </g>
                <g id="svga-group-eyes-right-move" transform="matrix(1,0,0,1,0,0)">
                  <g id="svga-group-eyes-right" transform="matrix(1,0,0,1,0,0)">
                    <g id="svga-group-eyesback-right">
                      <path id="SvgjsPath5226" d="M138.048 84.523c0.506-2.285-5.191-3.973-12.711-3.051 -7.518 0.923-12.738 5.524-12.052 7.844 0.38 1.286 10.639 3.245 14.253 2.847C131.202 91.758 136.826 90.04 138.048 84.523z" fill="url(#SvgjsRadialGradient5227)" opacity="1" />
                    </g>
                    <g id="svga-group-eyesiriswrapper-right" transform="matrix(1,0,0,1,0.75,-0.5)" ref={pupilRightRef}>
                      <g id="svga-group-eyesiriscontrol-right" transform="matrix(1,0,0,1,0,0)">
                        <g id="svga-group-eyesiris-right" transform="matrix(1,0,0,1,0,0)">
                          <path id="SvgjsPath3704" d="M133.5 87c0 4.694-3.806 8.5-8.499 8.5 -4.694 0-8.501-3.806-8.501-8.5l0 0c0-4.694 3.807-8.5 8.501-8.5C129.694 78.499 133.5 82.305 133.5 87L133.5 87z" fill="#1e1e1e" strokeWidth="none" opacity="1" stroke="none" />
                          <path id="SvgjsPath3705" d="M124.048 78.595c-0.033 0.004-0.066 0.008-0.101 0.012 0.041 0.191 0.081 0.384 0.12 0.575C124.06 78.987 124.055 78.789 124.048 78.595zM124.066 79.18c0.099 2.793 0.262 5.282 0.732 6.183C125.047 84.377 124.625 81.92 124.066 79.18zM124.8 85.365c-0.061 0.236-0.153 0.397-0.294 0.452 -0.142 0.053-0.319-0.008-0.521-0.146 0.058 0.236 0.052 0.422-0.051 0.537 -0.102 0.114-0.285 0.142-0.527 0.11 0.16 0.184 0.242 0.353 0.206 0.5 -0.039 0.148-0.189 0.258-0.415 0.343 0.225 0.088 0.376 0.199 0.411 0.347 0.036 0.148-0.046 0.315-0.205 0.498 0.241-0.029 0.426 0.001 0.525 0.115 0.101 0.114 0.106 0.301 0.05 0.537 0.199-0.137 0.376-0.197 0.518-0.142 0.143 0.053 0.234 0.216 0.291 0.454 0.114-0.215 0.243-0.353 0.396-0.368 0.148-0.02 0.307 0.084 0.466 0.267 0.002-0.244 0.053-0.423 0.181-0.51 0.124-0.086 0.311-0.069 0.537 0.018 -0.11-0.216-0.148-0.398-0.078-0.534 0.071-0.135 0.245-0.207 0.487-0.235 -0.199-0.14-0.321-0.283-0.318-0.436 -0.001-0.153 0.119-0.296 0.321-0.434 -0.241-0.03-0.412-0.103-0.484-0.237 -0.07-0.135-0.031-0.319 0.081-0.535 -0.229 0.085-0.413 0.102-0.538 0.016 -0.126-0.086-0.177-0.267-0.178-0.51 -0.158 0.182-0.316 0.282-0.468 0.262C125.041 85.714 124.911 85.58 124.8 85.365zM125.66 85.471c0.679-0.758 1.446-3.13 2.224-5.813C126.674 82.174 125.662 84.453 125.66 85.471zM127.883 79.657c0.085-0.172 0.172-0.348 0.253-0.524 -0.03-0.011-0.06-0.024-0.09-0.037C127.992 79.284 127.938 79.472 127.883 79.657zM126.377 85.965c0.953-0.357 2.736-2.101 4.671-4.115C128.808 83.517 126.851 85.065 126.377 85.965zM131.048 81.851c0.142-0.106 0.287-0.213 0.433-0.318 -0.021-0.025-0.043-0.047-0.06-0.07C131.297 81.59 131.174 81.722 131.048 81.851zM126.777 86.738c1.01 0.125 3.399-0.591 6.052-1.475C130.068 85.698 127.617 86.159 126.777 86.738zM132.829 85.263c0.156-0.022 0.318-0.048 0.478-0.073 -0.007-0.026-0.013-0.054-0.02-0.081C133.135 85.16 132.979 85.212 132.829 85.263zM126.775 87.606c0.836 0.583 3.284 1.057 6.038 1.505C130.171 88.214 127.786 87.484 126.775 87.606zM132.813 89.111c0.135 0.047 0.271 0.095 0.404 0.138 0.007-0.024 0.013-0.047 0.018-0.071C133.098 89.158 132.954 89.135 132.813 89.111zM126.367 88.375c0.471 0.902 2.42 2.462 4.649 4.142C129.092 90.492 127.32 88.737 126.367 88.375zM131.018 92.514c0.083 0.087 0.17 0.179 0.253 0.268 0.014-0.017 0.027-0.031 0.043-0.046C131.215 92.662 131.113 92.587 131.018 92.514zM125.652 88.867c-0.004 1.019 0.995 3.302 2.191 5.827C127.079 92.006 126.327 89.628 125.652 88.867zM127.844 94.694c0.03 0.106 0.062 0.215 0.09 0.324 0.021-0.008 0.036-0.015 0.055-0.02C127.941 94.896 127.892 94.793 127.844 94.694zM124.788 88.968c-0.476 0.902-0.653 3.386-0.768 6.178C124.594 92.413 125.031 89.958 124.788 88.968zM124.021 95.146c-0.023 0.106-0.044 0.214-0.066 0.323 0.02 0.004 0.035 0.005 0.055 0.007C124.013 95.368 124.018 95.254 124.021 95.146zM123.979 88.657c-0.844 0.576-2.154 2.697-3.553 5.114C122.204 91.617 123.733 89.645 123.979 88.657zM120.427 93.771c-0.074 0.09-0.152 0.185-0.229 0.274 0.018 0.012 0.034 0.02 0.053 0.034C120.309 93.976 120.369 93.873 120.427 93.771zM123.405 88.006c-1.015 0.119-3.16 1.385-5.522 2.875C120.46 89.801 122.726 88.768 123.405 88.006zM117.883 90.884c-0.122 0.051-0.247 0.102-0.372 0.156 0.009 0.019 0.021 0.038 0.033 0.057C117.658 91.027 117.771 90.954 117.883 90.884zM123.198 87.161c-0.951-0.365-3.441-0.238-6.227-0.016C119.755 87.383 122.244 87.521 123.198 87.161zM116.972 87.145c-0.151-0.014-0.308-0.028-0.457-0.041 -0.001 0.027-0.003 0.053-0.001 0.08C116.669 87.169 116.822 87.156 116.972 87.145zM123.407 86.318c-0.67-0.763-2.932-1.809-5.499-2.905C120.259 84.915 122.397 86.196 123.407 86.318zM117.908 83.413c-0.147-0.095-0.297-0.189-0.446-0.285 -0.013 0.026-0.026 0.053-0.041 0.078C117.585 83.276 117.75 83.344 117.908 83.413zM123.985 85.67c-0.239-0.989-1.758-2.967-3.521-5.132C121.849 82.963 123.147 85.09 123.985 85.67zM120.465 80.538c-0.095-0.163-0.188-0.329-0.281-0.494 -0.026 0.018-0.055 0.037-0.079 0.054C120.224 80.245 120.348 80.393 120.465 80.538z" fill="url(#SvgjsRadialGradient3706)" opacity="1" />
                          <path id="SvgjsPath3709" d="M126.255 78.622c-0.034-0.004-0.066-0.01-0.1-0.014 -0.011 0.196-0.022 0.393-0.034 0.586C126.164 79.004 126.211 78.812 126.255 78.622zM126.12 79.193c-0.627 2.724-1.114 5.17-0.892 6.162C125.724 84.467 125.95 81.984 126.12 79.193zM125.229 85.356c-0.119 0.212-0.25 0.344-0.401 0.36 -0.15 0.014-0.306-0.091-0.464-0.276 -0.006 0.243-0.06 0.421-0.188 0.505 -0.128 0.083-0.313 0.063-0.539-0.03 0.107 0.219 0.143 0.403 0.069 0.536 -0.075 0.133-0.249 0.201-0.489 0.224 0.194 0.144 0.312 0.289 0.308 0.441 -0.003 0.152-0.126 0.292-0.327 0.428 0.24 0.034 0.41 0.111 0.478 0.247 0.067 0.136 0.025 0.318-0.091 0.532 0.229-0.081 0.414-0.093 0.537-0.003 0.123 0.088 0.17 0.27 0.164 0.514 0.166-0.177 0.325-0.278 0.478-0.253 0.148 0.02 0.274 0.16 0.382 0.379 0.064-0.236 0.16-0.396 0.306-0.447 0.143-0.051 0.318 0.014 0.515 0.157 -0.051-0.237-0.041-0.423 0.063-0.536s0.29-0.136 0.532-0.102c-0.157-0.187-0.238-0.356-0.195-0.504 0.039-0.148 0.192-0.255 0.423-0.336 -0.226-0.091-0.372-0.206-0.407-0.354 -0.032-0.149 0.053-0.316 0.218-0.495 -0.243 0.023-0.427-0.009-0.524-0.125 -0.099-0.115-0.102-0.303-0.039-0.538 -0.201 0.134-0.38 0.19-0.521 0.132C125.37 85.756 125.281 85.593 125.229 85.356zM126.033 85.683c0.852-0.558 2.206-2.65 3.652-5.04C127.865 82.76 126.298 84.699 126.033 85.683zM129.685 80.641c0.126-0.145 0.255-0.292 0.38-0.44 -0.027-0.019-0.052-0.04-0.078-0.06C129.886 80.31 129.785 80.477 129.685 80.641zM126.597 86.345c1.013-0.099 3.187-1.322 5.577-2.767C129.578 84.609 127.287 85.598 126.597 86.345zM132.173 83.579c0.165-0.065 0.333-0.131 0.501-0.195 -0.014-0.029-0.029-0.056-0.04-0.083C132.481 83.392 132.328 83.487 132.173 83.579zM126.783 87.194c0.943 0.382 3.437 0.309 6.227 0.142C130.231 87.042 127.745 86.853 126.783 87.194zM133.01 87.336c0.158 0.019 0.32 0.036 0.48 0.053 0.001-0.027 0.002-0.055 0.003-0.083C133.332 87.316 133.168 87.326 133.01 87.336zM126.558 88.033c0.655 0.78 2.898 1.871 5.442 3.017C129.679 89.499 127.565 88.177 126.558 88.033zM132 91.049c0.117 0.08 0.236 0.161 0.354 0.238 0.013-0.021 0.024-0.042 0.035-0.063C132.262 91.168 132.129 91.109 132 91.049zM125.964 88.67c0.221 0.993 1.699 3.004 3.419 5.205C128.048 91.419 126.791 89.266 125.964 88.67zM129.384 93.872c0.059 0.106 0.117 0.217 0.176 0.325 0.018-0.013 0.034-0.023 0.053-0.034C129.536 94.065 129.458 93.967 129.384 93.872zM125.146 88.96c-0.267 0.982 0.107 3.447 0.608 6.195C125.711 92.361 125.601 89.87 125.146 88.96zM125.754 95.155c0.002 0.11 0.004 0.224 0.004 0.337 0.021-0.003 0.038-0.005 0.058-0.005C125.796 95.376 125.775 95.264 125.754 95.155zM124.285 88.834c-0.693 0.748-1.508 3.102-2.341 5.769C123.205 92.11 124.265 89.853 124.285 88.834zM121.944 94.603c-0.05 0.096-0.099 0.195-0.147 0.295 0.017 0.008 0.032 0.013 0.051 0.021C121.879 94.815 121.913 94.707 121.944 94.603zM123.584 88.324c-0.964 0.338-2.779 2.048-4.756 4.021C121.104 90.724 123.091 89.215 123.584 88.324zM118.828 92.345c-0.095 0.067-0.194 0.138-0.29 0.206 0.014 0.016 0.027 0.028 0.041 0.045C118.661 92.511 118.746 92.428 118.828 92.345zM123.197 87.546c-1.01-0.148-3.409 0.521-6.078 1.349C119.889 88.518 122.345 88.106 123.197 87.546zM117.119 88.897c-0.131 0.018-0.265 0.034-0.4 0.054 0.005 0.021 0.011 0.042 0.018 0.063C116.865 88.977 116.993 88.936 117.119 88.897zM123.217 86.677c-0.824-0.599-3.263-1.121-6.01-1.627C119.833 86 122.202 86.777 123.217 86.677zM117.207 85.05c-0.143-0.052-0.29-0.106-0.432-0.158 -0.008 0.026-0.016 0.051-0.021 0.077C116.907 84.995 117.06 85.022 117.207 85.05zM123.637 85.917c-0.45-0.911-2.363-2.506-4.561-4.23C120.959 83.747 122.693 85.538 123.637 85.917zM119.076 81.688c-0.118-0.13-0.236-0.26-0.355-0.391 -0.021 0.022-0.041 0.044-0.061 0.065C118.8 81.471 118.941 81.58 119.076 81.688zM124.363 85.44c0.024-1.017-0.93-3.321-2.073-5.868C122.999 82.273 123.704 84.663 124.363 85.44zM122.29 79.572c-0.049-0.182-0.096-0.366-0.144-0.55 -0.029 0.01-0.062 0.021-0.09 0.032C122.134 79.227 122.214 79.401 122.29 79.572z" fill="url(#SvgjsRadialGradient3710)" opacity="1" />
                          <path id="SvgjsPath3713" d="M128.334 87c0 1.842-1.492 3.333-3.333 3.333s-3.335-1.492-3.335-3.333c0-1.841 1.494-3.334 3.335-3.334C126.844 83.666 128.334 85.159 128.334 87z" fill="#1e1e1e" strokeWidth="none" opacity="1" stroke="none" />
                          <path id="SvgjsPath3714" d="M128.334 87c0 1.842-1.492 3.333-3.333 3.333s-3.335-1.492-3.335-3.333c0-1.841 1.494-3.334 3.335-3.334C126.844 83.666 128.334 85.159 128.334 87z" fill="#000000" strokeWidth="none" opacity="0.9" />
                          <path id="SvgjsPath3715" d="M120.35 90.893c0.636-0.427 1.5-0.255 1.927 0.38 0.427 0.637 0.258 1.5-0.379 1.927 -0.638 0.429-1.5 0.258-1.927-0.378C119.544 92.185 119.713 91.32 120.35 90.893L120.35 90.893z" fill="url(#SvgjsLinearGradient3716)" opacity="0.5" />
                          <path id="SvgjsPath3719" d="M127.635 86.536c-0.356 0.53-1.373 0.468-2.275-0.136 -0.903-0.605-1.346-1.526-0.991-2.055l0.001-0.001c0.354-0.53 1.372-0.469 2.274 0.137 0.903 0.604 1.346 1.524 0.992 2.054C127.635 86.536 127.635 86.536 127.635 86.536z" fill="url(#SvgjsLinearGradient3720)" opacity="0.5" />
                          <path id="SvgjsPath3723" d="M131.682 85.121c-0.806 1.237-2.884 1.31-4.641 0.166 -1.756-1.145-2.527-3.075-1.722-4.311 0.806-1.235 2.884-1.31 4.641-0.166C131.715 81.956 132.485 83.887 131.682 85.121L131.682 85.121z" fill="url(#SvgjsLinearGradient3724)" opacity="0.75" />
                        </g>
                      </g>
                    </g>
                    <g id="svga-group-eyesfront-right">
                      <path id="SvgjsPath5261" d="M126.5 63c-9.94 0-18 11.192-18 25 0 13.807 8.06 24.999 18 24.999s18-11.192 18-24.999C144.5 74.192 136.44 63 126.5 63zM127.538 92.163c-3.614 0.398-13.873-1.561-14.253-2.847 -0.687-2.32 4.534-6.921 12.052-7.844 7.52-0.922 13.217 0.767 12.711 3.051C136.826 90.04 131.202 91.758 127.538 92.163z" fill="#c58e74" strokeWidth="none" opacity="1" />
                      <path id="SvgjsPath5262" d="M127.538 92.163c-3.614 0.398-13.873-1.561-14.253-2.847 -0.687-2.32 4.534-6.921 12.052-7.844 6.46-0.792 11.563 0.345 12.556 2.128 -0.898-6.4-7.7-11.397-15.987-11.434 -8.911-0.037-16.148 5.676-16.172 12.765 -0.021 7.088 7.185 12.862 16.095 12.902 8.913 0.037 16.149-5.676 16.173-12.764 0-0.105-0.016-0.208-0.019-0.313C136.652 90.083 131.148 91.764 127.538 92.163z" fill="url(#SvgjsRadialGradient5263)" opacity="1" />
                      <path id="SvgjsPath5267" d="M138.048 84.523c0.506-2.285-5.191-3.973-12.711-3.051 -7.518 0.923-12.738 5.524-12.052 7.844 0.38 1.286 10.639 3.245 14.253 2.847C131.202 91.758 136.826 90.04 138.048 84.523z" fill="url(#SvgjsRadialGradient5268)" opacity="1" />
                      <path id="SvgjsPath5271" d="M137.651 79.417c-4.208-1.978-9.35-2.16-13.838-1.005 -2.404 0.561-4.965 1.285-7.063 2.638 -1.945 1.135-3.525 2.5-5.002 4.19 1.342-1.701 2.773-3.118 4.623-4.27 2.276-1.416 4.769-2.294 7.364-2.916C128.322 76.928 133.458 77.184 137.651 79.417z" fill="#974e2c" strokeWidth="none" opacity="1" />
                      <path id="SvgjsPath5272" d="M142.682 80.972c0 0-2.328 0.881-3.595 0.62 0.39-0.459 1.096-1.604 1.096-1.604s-1.853 0.551-3.151 0.032c-0.88-0.352-4.065-1-5.456-1.066 -1.687-0.082-5.073 0.125-6.735 0.424 -3.374 0.608-8.985 2.63-11.678 7.184 -0.255 0.572-1.407 0.921-1.407 0.921s1.02-0.215 1.149 0.042c0.282 0.561-1.298 2.016-1.496 2.197 0.161-0.145 1.289-1.135 1.722-0.967 0.061 0.022 0.137 0.388 0.155 0.482 -0.3-2.426 4.838-6.746 12.052-7.604 7.52-0.894 13.217 0.743 12.711 2.958 -1.222 5.348-6.846 7.013-10.51 7.405 -2.526 0.271-8.298-0.577-11.675-1.537l-1.011-0.317c1.999 1.009 7.524 2.195 9.767 2.403 0.744 0.07 2.24 0.104 2.986 0.085 5.949-0.158 10.16-3.179 11.729-7.26 0.125-0.328 0.494-0.619 0.838-0.696 1.604-0.361 5.096-1.811 5.096-1.811 -2.32 0.361-3.483 0.674-5.305 0.059C141.743 82.256 142.682 80.972 142.682 80.972z" fill="#000000" strokeWidth="none" opacity="1" />
                    </g>
                  </g>
                </g>
                <g id="svga-group-facehighlight-single">
                  <path id="SvgjsPath2772" d="M140.204 113.007c0.035 22.275-17.995 40.365-40.273 40.396 -22.274 0.036-40.361-17.993-40.396-40.272C59.501 90.857 77.53 72.77 99.808 72.735 122.083 72.701 140.171 90.73 140.204 113.007z" fill="url(#SvgjsRadialGradient2773)" opacity="1" />
                  <path id="SvgjsPath2776" d="M135,55.999c0,19.329-15.671,35-35,35c-19.329,0-35-15.671-35-35s15.671-35,35-35C119.329,20.999,135,36.67,135,55.999z" fill="url(#SvgjsRadialGradient2777)" opacity="1" />
                </g>
                {hover ? <Eyebrows /> : hoverMedia ? <AdorableEyes /> : <>
                  <g id="svga-group-eyebrows-left-move" transform="matrix(1,0,0,1,0,0)">
                    <g id="svga-group-eyebrows-left-rotate" transform="matrix(1,0,0,1,0,0)">
                      <g id="svga-group-eyebrows-left" transform="matrix(1,0,0,1,0,0)">
                        <path id="SvgjsPath3966" d="M54.351 74.996c9.743-15.115 36.491 5.148 38.018-1.191 0.299-1.271-0.407-2.015-1.564-2.492C77.184 65.807 59.156 61.18 54.351 74.996z" fill="#2a232b" strokeWidth="none" opacity="1" />
                      </g>
                    </g>
                  </g>
                  <g id="svga-group-eyebrows-right-move" transform="matrix(1,0,0,1,0,0)">
                    <g id="svga-group-eyebrows-right-rotate" transform="matrix(1,0,0,1,0,0)">
                      <g id="svga-group-eyebrows-right" transform="matrix(1,0,0,1,0,0)">
                        <path id="SvgjsPath3967" d="M145.649 74.996c-9.743-15.115-36.491 5.148-38.018-1.191 -0.299-1.271 0.407-2.015 1.564-2.492C122.816 65.807 140.844 61.18 145.649 74.996z" fill="#2a232b" strokeWidth="none" opacity="1" />
                      </g>
                    </g>
                  </g>
                </>}
                <g id="svga-group-nose-single-move" transform="matrix(1,0,0,1,0,0)">
                  <g id="svga-group-nose-single" transform="matrix(1,0,0,1,0,0)">
                    <path id="SvgjsPath5212" d="M97.363 92.602c0 0 0.055 7.962-0.458 9.512 -1.129 3.405-6.123 11.297-5.49 13.486 0.985 3.403 5.817 3.652 8.259 3.771 2.338 0.115 7.091-0.055 7.857-2.267 0.312-0.9-0.361-3.197-0.361-3.197s-2.165 2.228-7.266 1.98c-1.456-0.07-3.824-1.5-3.851-3.517 -0.036-2.734 1.805-5.87 2.135-8.583C98.438 101.726 97.363 92.602 97.363 92.602z" fill="#b67759" strokeWidth="none" opacity="1" />
                    <path id="SvgjsPath5213" d="M104.209 117.032c0.881 0 1.119 0.234 1.119 0.522 0 0.29-0.274 0.735-1.119 0.522 -0.928-0.231-2.548-0.124-2.548-0.124S103.328 117.032 104.209 117.032zM95.8 117.032c-0.881 0.001-1.119 0.236-1.119 0.525 0 0.288 0.265 0.704 1.119 0.521 0.941-0.201 2.548-0.125 2.548-0.125S96.682 117.035 95.8 117.032zM107.169 113.906c0 0 1.22 1.384 0.966 2.847 -0.246 1.421-2.709 2.047-2.709 2.047s1.71-1.085 1.917-2.403C107.439 115.781 107.169 113.906 107.169 113.906zM92.12 112.482c0 0-0.89 1.938-0.632 3.117 0.467 2.13 3.032 2.982 3.032 2.982s-1.601-1.462-2.17-2.753C91.729 114.42 92.12 112.482 92.12 112.482z" fill="#974e2c" strokeWidth="none" opacity="1" />
                    <path id="SvgjsPath5214" d="M104.166 114.937c0.854-0.637 0.939-1 0.763-1.237 -0.176-0.238-0.688-0.389-1.403 0.379 -0.788 0.846-2.502 1.47-2.502 1.47S103.312 115.574 104.166 114.937z" fill="#d4a792" strokeWidth="none" opacity="1" />
                  </g>
                </g>
                <g id="svga-group-hair-front" transform="matrix(1,0,0,1,0,0)">
                  <path id="SvgjsPath5515" d="M151.686 97.871c0-11.927-0.214-18.574-3.512-30.116 -1.318-4.613-5.302-8.946-8.959-13.721 -3.451-4.509-6.078-10.609-9.096-16.049 -5.616 3.104-11.944 5.362-20.059 6.589 -4.189 0.633-9.402 1.421-15.795 2.708 -22.479 4.515-44.862 12.433-47.426 30.883 -2.551 14.437-13.806-33.235 53.641-45.936 49.198-9.264 63.93 13.61 60.493 39.159C159.061 85.624 151.686 97.871 151.686 97.871z" fill="#2a232b" strokeWidth="none" opacity="0.1" stroke="none" />
                  <path id="SvgjsPath5516" d="M151.417 100.722c2.836-14.29 3.792-26.049-0.761-36.989 -1.874-4.503-5.385-9.09-9.102-13.947 -3.507-4.582-7.132-9.319-10.193-14.848 -5.702 3.156-11.177 3.985-19.42 5.232 -4.256 0.644-9.551 1.445-16.048 2.752 -22.833 4.591-44.64 11.3-49.561 29.146 -2.594 14.676 0.425 24.889 0.562 25.339l0.031 0.095 -0.043 0.136 -0.06 0.083h-0.25l-0.059-0.193c-0.084-0.259-0.868-2.604-3.153-7.5 -7.005-15.01-12.961-31.84-2.395-57.841C47.262 16.686 55.446 6.695 67.499-0.208 77.797-6.107 87.54-8.975 97.284-8.975c8.261 0 21.392 3.475 21.588 4.475 8.281 0.491 15.644-0.313 27.202 12.248 8.979 9.761 21.073 33.709 17.583 59.679 -1.943 14.471-7.979 25.874-10.557 30.743 -0.692 1.308-1.193 2.253-1.294 2.643L151.417 100.722z" fill="#2a232b" strokeWidth="none" opacity="1" stroke="none" />
                  <path id="SvgjsPath5517" d="M163.657 67.426c-1.984 14.777-11.24 32.525-12.24 32.296 2.836-14.29 3.792-25.049-0.761-35.989 -4.134-9.933-16.133-20.627-18.963-28.787 -2.224 1.728-8.598 3.397-19.752 5.224 -4.248 0.696-9.551 1.445-16.048 2.752 -22.833 4.591-44.64 11.3-49.561 29.146 -3.892 22.017 4.976 35.981-2.973 18.959 -7.005-15.01-12.961-33.14-2.395-59.141C47.648 15.432 58.337 0.003 75.085-5.464c2.904-0.948 3.78-0.194 0.897 0.961C61.014 1.515 52.744 15.485 45.689 33.832c0 0 0.304-7.335 3.513-13.843 -7.833 13.622-13.98 27.905-8.879 51.601 -0.951-16.854 7.507-30.616 16.673-37.783 -8.38 11.338-12.324 20.929-12.294 31.598 5.167-13.667 16.371-22.259 31.5-24.667 18.59-2.958 48.883-7.153 56.491-13.126 0.312-0.347 0.653-0.686 1.066-1.008 0 6.396 2.777 9.232 5.24 11.396 13.915 12.229 19 28 18 45 2-17-1-34-10-48 8 8 12 19 14 30 1.22-17.085-3.16-33.417-10.611-48.104 2.134 6.681 2.111 12.406 2.39 12.865 -0.604-1-3.022-28.786-28.181-34.475C150.934-1.238 167.531 38.596 163.657 67.426zM149.595 45.788c-0.771-1.002-10.38-14.231-10.343-22.229C138.123 33.06 142.384 36.429 149.595 45.788zM64.803 31.048c8.477-6.569 14.928-9.919 25.442-12.212 6.227-1.359 15.22-1.644 27.042-4.067 0.04-0.008 0.081-0.019 0.122-0.026 0 0-10.631 3.032-26.412 5.793C80.345 22.399 75.041 24.457 64.803 31.048zM84.513 4.102c19.225-4.631 36.823-3.665 50.436 10.549C126.995 6.347 110.959-0.393 84.513 4.102z" fill="#1b141c" strokeWidth="none" opacity="1" stroke="none" />
                  <path id="SvgjsPath5518" d="M49.353 54.83c6.177-10.488 12.681-17.599 24.109-21.923 21.07-7.974 37.013-3.576 60.369-11.915 -4.557 1.627-7.094 4.249-33.97 7.959 -17.238 2.382-25.38 4.37-31.725 7.597C59.112 41.139 54.101 47.572 49.353 54.83zM102.038 5.505c-0.013 0.002-0.087 0.005-0.09 0.005 -7.204 0.476-33.15-0.68-52.604 29.249C66.716 12.814 83.166 9.125 102.038 5.505z" fill="#0c080c" strokeWidth="none" opacity="1" stroke="none" />
                  <path id="SvgjsPath5519" d="M51.695 46.43c10.477-13.847 18.136-17.225 29.399-18.928C66.793 29.664 51.695 45.36 51.695 46.43 52.058 45.951 51.695 46.43 51.695 46.43zM67.385 8.454C51.056 18.625 47.031 32.039 46.892 33.039 49.467 26.4 59.661 13.267 67.385 8.454zM157.313 77.406c-0.259-9.621 0.057-23.952-14.679-35.755C154.329 52.545 155.494 65.235 157.313 77.406zM57.213 33.421c-0.637 0.263-5.713 5.016-6.229 5.533 -9.832 9.842-11.415 18.801-10.542 32.632C40.237 45.783 56.213 33.833 57.213 33.421zM141.658 19.382c7.828 10.565 12.673 21.56 15.459 29.502 -2.193-5.436-5.308-10.323-10.242-14.787 6.684 7.154 13.271 23.233 13.731 28.865C160.524 61.956 161.244 40.477 141.658 19.382zM100.645 37.108c25.392-4.578 25.475-6.359 33.177-10.399 -8.732 4.581-10.754 5.984-33.37 9.444 -25.869 3.957-47.642 6.37-54.768 27.178C53.682 42.119 75.816 41.586 100.645 37.108z" fill="#3a353a" strokeWidth="none" opacity="1" stroke="none" />
                  <path id="SvgjsPath5520" d="M151.28 11.084c-7.513-9.719-18.752-17.241-30.852-15.839C89.597-19.604 53.174-3.752 38.345 33.664 25.039 67.235 46.132 101.756 47.706 101c2.401-1.154-4.167-18.054 1.153-30.882 5.416-13.059 25.43-19.579 45.658-24.673 19.117-4.815 27.417-4.69 36.338-9.523 0.003-0.001 0.005-0.003 0.008-0.005 6.412 12.427 14.565 20.061 18.671 31.197 4.276 11.604-0.18 34.874 0.916 35.321 2.902 1.185 11.388-19.541 13.871-30.778C169.387 48.739 163.207 26.516 151.28 11.084zM163.459 67.399c-2.461 18.324-11.344 30.421-11.846 32.362 2.592-13.059 4.02-24.59-0.772-36.105 -3.604-8.663-12.96-17.276-19.401-28.991 -8.695 4.882-16.492 4.22-35.586 8.06C75.84 46.75 51.348 53.125 46.139 72.015c-3.956 22.372 3.399 31.39-2.599 18.928 -4.586-9.527-12.923-32.762-2.391-58.681C46.815 18.316 54.489 7.473 67.599-0.035c19.982-11.446 35.868-10.229 50.924-4.437 1.509-0.282-8.718 2.916-13.15 3.695 6.495 3.255 19.759-13.941 40.555 8.659C155.79 18.604 166.764 42.811 163.459 67.399z" fill="#000000" strokeWidth="none" opacity="1" stroke="none" />
                </g>
                <g id="svga-group-glasses-single-move" transform="matrix(1,0,0,1,0,0)">
                  <g id="svga-group-glasses-single" transform="matrix(1,0,0,1,0,0)">
                    <path id="SvgjsPath2899" d="M100,18.13L100,18.13L100,18.13L100,18.13z" fill="#26120b" strokeWidth="none" opacity="1" />
                  </g>
                </g>
              </g>
            </g>
          </g>
          <rect id="SvgjsRect1052" width="200" height="15" x="0" y="185" fill="#ecf0f1" opacity="0.5" style={{ display: "none" }} />
          <text id="SvgjsText1053" fontFamily="Roboto, Helvetica, Arial, sans-serif" fontSize="10px" textAnchor="start" fontWeight="400" anchor="start" fill="#333333" x="38.75505065917969" y="182.51619362831116" style={{ display: "none" }}>
            <tspan id="SvgjsTspan1054" dy="13" x="38.75505065917969">Created on svgAvatars.com</tspan>
          </text>
        </g>
      </svg>

    </div>
  );
};

export default Avatar;

