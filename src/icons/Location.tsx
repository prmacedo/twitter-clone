import { IconProps } from "./interface";

export function Location({ className, size }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M12 14.315C9.91201 14.315 8.21301 12.617 8.21301 10.529C8.21301 8.44099 9.91301 6.73999 12 6.73999C14.087 6.73999 15.787 8.43999 15.787 10.527C15.787 12.614 14.087 14.312 12 14.312V14.315ZM12 8.24199C10.74 8.24199 9.71301 9.26799 9.71301 10.529C9.71301 11.79 10.74 12.814 12 12.814C13.26 12.814 14.287 11.789 14.287 10.528C14.287 9.26699 13.26 8.23999 12 8.23999V8.24199Z"/>
      <path d="M20.692 10.69C20.692 5.9 16.792 2 12 2C7.20798 2 3.30798 5.9 3.30798 10.69C3.30798 12.592 3.91098 14.398 5.05098 15.913L5.05398 15.911L5.06098 15.926C6.68898 17.996 11.339 21.683 11.536 21.838C11.674 21.948 11.838 22.001 12.001 22.001C12.164 22.001 12.328 21.948 12.466 21.839C12.663 21.684 17.313 17.999 18.941 15.927L18.948 15.913L18.95 15.915C20.09 14.399 20.692 12.595 20.692 10.692V10.69ZM12 20.29C10.776 19.3 7.47998 16.575 6.24398 15.005C5.30398 13.755 4.80798 12.263 4.80798 10.693C4.80798 6.727 8.03498 3.5 12 3.5C15.965 3.5 19.192 6.726 19.192 10.69C19.192 12.26 18.695 13.752 17.756 15.003C16.52 16.573 13.224 19.297 12 20.288V20.29Z"/>
    </svg>
  )
}