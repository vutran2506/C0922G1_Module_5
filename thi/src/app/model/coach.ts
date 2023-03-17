import {CoachType} from "./coach-type";
import {Departure} from "./departure";
import {Destination} from "./destination";

export interface Coach {
  id?: number;
  numberBus?: string;
  name?: string;
  email?: string;
  phone?: string;
  startTime?: string;
  eadTime?: string;
  coachType?: CoachType;
  departure?: Departure;
  destination?: Destination;
}
