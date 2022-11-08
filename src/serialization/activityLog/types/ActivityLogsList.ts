/**
 * This file auto-generated by Fern from our API Definition.
 */

import { DopplerApi } from "../../..";
import * as core from "../../../core";
import * as serializers from "../..";

export const ActivityLogsList: core.schemas.ObjectSchema<
  ActivityLogsList.Raw,
  DopplerApi.activityLog.ActivityLogsList
> = core.schemas.object({
  page: core.schemas.number(),
  logs: core.schemas.list(core.schemas.lazyObject(() => serializers.activityLog.ActivityLog)),
});

export declare namespace ActivityLogsList {
  interface Raw {
    page: number;
    logs: serializers.activityLog.ActivityLog.Raw[];
  }
}
