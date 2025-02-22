export * as Icons from './icons';

export type IconProps = React.SVGProps<SVGSVGElement> & { size?: number };

export const Logo = ({ size = 24, height, width, ...props }: IconProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    viewBox="0 0 24 24"
    fill="currentColor"
    height={size || height}
    width={size || width}
    {...props}
  >
    <path d="M 19.6875 2 L 8.6875 3.5 C 7.6875 3.601563 7 4.5 7 5.5 L 7 15.78125 C 6.539063 15.699219 6.039063 15.699219 5.5 15.8125 C 3.601563 16.3125 2 17.988281 2 19.6875 C 2 21.386719 3.601563 22.40625 5.5 21.90625 C 7.398438 21.40625 9 19.699219 9 18 L 9 9.40625 L 20 7.9375 L 20 14.71875 C 19.539063 14.636719 19.039063 14.671875 18.5 14.8125 C 16.601563 15.3125 15 16.988281 15 18.6875 C 15 20.386719 16.601563 21.40625 18.5 20.90625 C 20.398438 20.40625 22 18.699219 22 17 L 22 4 C 22 2.800781 20.886719 1.898438 19.6875 2 Z" />
  </svg>
);

export const Sun = ({ size = 24, height, width, ...props }: IconProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    viewBox="0 0 24 24"
    fill="currentColor"
    height={size || height}
    width={size || width}
    {...props}
  >
    <path d="M12,18a6,6,0,1,0-6-6A6.006,6.006,0,0,0,12,18ZM12,8a4,4,0,1,1-4,4A4,4,0,0,1,12,8ZM11,3V2a1,1,0,0,1,2,0V3a1,1,0,0,1-2,0Zm1,17a1,1,0,0,1,1,1v1a1,1,0,0,1-2,0V21A1,1,0,0,1,12,20ZM17.657,6.343a1,1,0,0,1,0-1.414l.707-.707a1,1,0,0,1,1.414,1.414l-.707.707a1,1,0,0,1-1.414,0ZM6.343,17.657a1,1,0,0,1,0,1.414l-.707.707a1,1,0,0,1-1.414-1.414l.707-.707A1,1,0,0,1,6.343,17.657ZM23,12a1,1,0,0,1-1,1H21a1,1,0,0,1,0-2h1A1,1,0,0,1,23,12ZM1,12a1,1,0,0,1,1-1H3a1,1,0,0,1,0,2H2A1,1,0,0,1,1,12Zm18.071,5.657.707.707a1,1,0,1,1-1.414,1.414l-.707-.707a1,1,0,0,1,1.414-1.414ZM4.222,5.636A1,1,0,0,1,5.636,4.222l.707.707A1,1,0,1,1,4.929,6.343Z" />
  </svg>
);

export const Moon = ({ size = 24, height, width, ...props }: IconProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    viewBox="0 0 25 25"
    fill="currentColor"
    height={size || height}
    width={size || width}
    {...props}
  >
    <path
      d="M12.5007 22.9163C18.2536 22.9163 22.9173 18.2526 22.9173 12.4997C22.9173 6.74671 18.2536 2.08301 12.5007 2.08301C6.74768 2.08301 2.08398 6.74671 2.08398 12.4997C2.08398 18.2526 6.74768 22.9163 12.5007 22.9163Z"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M7.95221 3.19434C8.51519 3.31562 9.03372 3.59007 9.4506 3.9874C9.86748 4.38473 10.1665 4.8895 10.3147 5.44601C10.4628 6.00252 10.4544 6.58914 10.2902 7.14115C10.1261 7.69317 9.8127 8.18911 9.38456 8.57428C8.95641 8.95944 8.4302 9.21885 7.86396 9.32388C7.29772 9.42891 6.71347 9.37548 6.17568 9.16948C5.63789 8.96349 5.16745 8.61294 4.81627 8.15651C4.46509 7.70007 4.24682 7.1555 4.18555 6.58288M22.9178 13.5933C22.5126 13.1798 22.0146 12.8688 21.4652 12.686C20.9159 12.5032 20.3309 12.4539 19.7586 12.5421C19.1864 12.6303 18.6434 12.8535 18.1746 13.1933C17.7058 13.5331 17.3247 13.9796 17.0627 14.496C16.8008 15.0123 16.6656 15.5837 16.6684 16.1626C16.6711 16.7416 16.8117 17.3116 17.0785 17.8255C17.3453 18.3393 17.7307 18.7822 18.2027 19.1175C18.6747 19.4528 19.2198 19.6709 19.7928 19.7537"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M15.1048 8.864L15.1152 8.85254M10.4173 17.7077C10.9699 17.7077 11.4998 17.4883 11.8905 17.0976C12.2812 16.7069 12.5007 16.1769 12.5007 15.6244C12.5007 15.0719 12.2812 14.542 11.8905 14.1513C11.4998 13.7606 10.9699 13.5411 10.4173 13.5411C9.86478 13.5411 9.33488 13.7606 8.94418 14.1513C8.55348 14.542 8.33398 15.0719 8.33398 15.6244C8.33398 16.1769 8.55348 16.7069 8.94418 17.0976C9.33488 17.4883 9.86478 17.7077 10.4173 17.7077Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const GitHub = ({ size = 24, height, width, ...props }: IconProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={size || width}
    height={size || height}
    {...props}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

export const BlueSky = ({ size = 24, height, width, ...props }: IconProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={size || width}
    height={size || height}
    {...props}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="m135.72 44.03c66.496 49.921 138.02 151.14 164.28 205.46 26.262-54.316 97.782-155.54 164.28-205.46 47.98-36.021 125.72-63.892 125.72 24.795 0 17.712-10.155 148.79-16.111 170.07-20.703 73.984-96.144 92.854-163.25 81.433 117.3 19.964 147.14 86.092 82.697 152.22-122.39 125.59-175.91-31.511-189.63-71.766-2.514-7.3797-3.6904-10.832-3.7077-7.8964-0.0174-2.9357-1.1937 0.51669-3.7077 7.8964-13.714 40.255-67.233 197.36-189.63 71.766-64.444-66.128-34.605-132.26 82.697-152.22-67.108 11.421-142.55-7.4491-163.25-81.433-5.9562-21.282-16.111-152.36-16.111-170.07 0-88.687 77.742-60.816 125.72-24.795z" />
  </svg>
);

export const Play = ({ size = 24, height, width, ...props }: IconProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    viewBox="0 0 24 24"
    fill="currentColor"
    height={size || height}
    width={size || width}
    {...props}
  >
    <path
      fill="currentColor"
      d="M19.266 13.516a1.917 1.917 0 0 0 0-3.032A35.762 35.762 0 0 0 9.35 5.068l-.653-.232c-1.248-.443-2.567.401-2.736 1.69a42.49 42.49 0 0 0 0 10.948c.17 1.289 1.488 2.133 2.736 1.69l.653-.232a35.762 35.762 0 0 0 9.916-5.416Z"
    />
  </svg>
);

export const Pause = ({ size = 24, height, width, ...props }: IconProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    viewBox="0 0 24 24"
    fill="currentColor"
    height={size || height}
    width={size || width}
    {...props}
  >
    <path
      fill="currentColor"
      d="M17.276 5.47c.435.16.724.575.724 1.039V17.49c0 .464-.29.879-.724 1.039a3.69 3.69 0 0 1-2.552 0A1.107 1.107 0 0 1 14 17.491V6.51c0-.464.29-.879.724-1.04a3.69 3.69 0 0 1 2.552 0Zm-8 0c.435.16.724.575.724 1.039V17.49c0 .464-.29.879-.724 1.039a3.69 3.69 0 0 1-2.552 0A1.107 1.107 0 0 1 6 17.491V6.51c0-.464.29-.879.724-1.04a3.69 3.69 0 0 1 2.552 0Z"
    />
  </svg>
);

export const SkipBack = ({ size = 24, height, width, ...props }: IconProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    viewBox="0 0 24 24"
    fill="currentColor"
    height={size || height}
    width={size || width}
    {...props}
  >
    <path
      fill="currentColor"
      d="M6.75 7a.75.75 0 0 0-1.5 0v10a.75.75 0 0 0 1.5 0V7Zm3.102 5.66a.834.834 0 0 1 0-1.32a25.009 25.009 0 0 1 6.935-3.787l.466-.165a.944.944 0 0 1 1.243.772a29.813 29.813 0 0 1 0 7.68a.944.944 0 0 1-1.243.772l-.466-.165a25.01 25.01 0 0 1-6.935-3.788Z"
    />
  </svg>
);

export const SkipForward = ({
  size = 24,
  height,
  width,
  ...props
}: IconProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    viewBox="0 0 24 24"
    fill="currentColor"
    height={size || height}
    width={size || width}
    {...props}
  >
    <path
      fill="currentColor"
      d="M18.75 7a.75.75 0 0 0-1.5 0v10a.75.75 0 0 0 1.5 0V7Zm-4.296 3.945c.69.534.69 1.576 0 2.11a25.51 25.51 0 0 1-7.073 3.863l-.466.166c-.87.308-1.79-.28-1.907-1.178a30.314 30.314 0 0 1 0-7.812c.118-.898 1.037-1.486 1.907-1.177l.466.165a25.511 25.511 0 0 1 7.073 3.863Z"
    />
  </svg>
);
