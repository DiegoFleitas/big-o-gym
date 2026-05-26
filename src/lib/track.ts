export type EventName =
  | 'problem_shown'
  | 'submit'
  | 'solved'
  | 'parse_error'
  | 'share'
  | 'challenge_arrived'
  | 'retry'
  | 'reflection_shown'
  | 'session_end'
  | 'race_start'
  | 'race_complete'
  | 'race_pb'
  | 'race_submit'
  | 'race_abandon'
  | 'race_callout_click'
  | 'nudge_shown'
  | 'nudge_clicked'
  | 'daily_started'
  | 'daily_solved'
  | 'show_solution';

type PropValue = string | number | boolean;

export function track(
  _name: EventName,
  _props?: Record<string, PropValue>
): void {}
