/**
 * This file auto-generated by Fern from our API Definition.
 */

import { DopplerApi } from "../../..";
import * as core from "../../../core";

export interface Request {
  /** Unique identifier for the log object. */
  log: string;
}

export type Response = core.APIResponse<DopplerApi.activityLog.ActivityLog, DopplerApi.activityLog.retrieve.Error>;
export type Error = Error._Unknown;

export declare namespace Error {
  interface _Unknown extends _Utils {
    errorName: void;
    content: core.Fetcher.Error;
  }

  interface _Utils {
    _visit: <Result>(visitor: Error._Visitor<Result>) => Result;
  }

  interface _Visitor<Result> {
    _other: (value: core.Fetcher.Error) => Result;
  }
}
