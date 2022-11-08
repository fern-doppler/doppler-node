/**
 * This file auto-generated by Fern from our API Definition.
 */

import { DopplerApi } from "../../..";
import * as core from "../../../core";

export const UpdateProjectRequest: core.schemas.ObjectSchema<
  UpdateProjectRequest.Raw,
  DopplerApi.projects.UpdateProjectRequest
> = core.schemas.object({
  project: core.schemas.string(),
  name: core.schemas.string(),
  description: core.schemas.string().optional(),
});

export declare namespace UpdateProjectRequest {
  interface Raw {
    project: string;
    name: string;
    description?: string | null;
  }
}