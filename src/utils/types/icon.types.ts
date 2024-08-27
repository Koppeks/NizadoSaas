type IconName = "calendar_icon" | "calendar_day_icon" | "clock_icon"
type IconSize = "small" | "medium" | "big"
type IconOutlineColor = "white" | "orange" | "gray"

export type IconTypes = {
  icon: IconName,
  size: IconSize,
  outlineColor?: IconOutlineColor
}