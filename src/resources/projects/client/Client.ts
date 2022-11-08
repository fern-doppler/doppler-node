/**
 * This file auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../environments";
import * as core from "../../../core";
import { DopplerApi } from "../../..";
import urlJoin from "url-join";
import * as serializers from "../../../serialization";

export declare namespace Client {
  interface Options {
    environment?: environments.Environment | string;
    auth?: {
      credentials?: core.Supplier<core.BasicAuth>;
    };
  }
}

export class Client {
  constructor(private readonly options: Client.Options) {}

  public async list(request: DopplerApi.projects.list.Request): Promise<DopplerApi.projects.list.Response> {
    const queryParameters = new URLSearchParams();
    if (request.page != null) {
      queryParameters.append("page", request.page);
    }

    if (request.perPage != null) {
      queryParameters.append("per_page", request.perPage.toString());
    }

    const response = await core.fetcher({
      url: urlJoin(this.options.environment ?? environments.Environment.Production, "/projects/"),
      method: "GET",
      headers: {
        Authorization: core.BasicAuth.toAuthorizationHeader(await core.Supplier.get(this.options.auth?.credentials)),
      },
      queryParameters: queryParameters,
    });
    if (response.ok) {
      return {
        ok: true,
        body: serializers.projects.ProjectList.parse(response.body as serializers.projects.ProjectList.Raw),
      };
    }

    return {
      ok: false,
      error: {
        errorName: undefined,
        content: response.error,
        _visit: (visitor) => visitor._other(response.error),
      },
    };
  }

  public async create(request: DopplerApi.projects.CreateProjectRequest): Promise<DopplerApi.projects.create.Response> {
    const response = await core.fetcher({
      url: urlJoin(this.options.environment ?? environments.Environment.Production, "/projects/"),
      method: "POST",
      headers: {
        Authorization: core.BasicAuth.toAuthorizationHeader(await core.Supplier.get(this.options.auth?.credentials)),
      },
      body: serializers.projects.CreateProjectRequest.json(request),
    });
    if (response.ok) {
      return {
        ok: true,
        body: serializers.projects.Project.parse(response.body as serializers.projects.Project.Raw),
      };
    }

    return {
      ok: false,
      error: {
        errorName: undefined,
        content: response.error,
        _visit: (visitor) => visitor._other(response.error),
      },
    };
  }

  public async retrieve(request: DopplerApi.projects.retrieve.Request): Promise<DopplerApi.projects.retrieve.Response> {
    const queryParameters = new URLSearchParams();
    queryParameters.append("project", request.project);
    const response = await core.fetcher({
      url: urlJoin(this.options.environment ?? environments.Environment.Production, "/projects/project"),
      method: "GET",
      headers: {
        Authorization: core.BasicAuth.toAuthorizationHeader(await core.Supplier.get(this.options.auth?.credentials)),
      },
      queryParameters: queryParameters,
    });
    if (response.ok) {
      return {
        ok: true,
        body: serializers.projects.Project.parse(response.body as serializers.projects.Project.Raw),
      };
    }

    return {
      ok: false,
      error: {
        errorName: undefined,
        content: response.error,
        _visit: (visitor) => visitor._other(response.error),
      },
    };
  }

  public async update(request: DopplerApi.projects.UpdateProjectRequest): Promise<DopplerApi.projects.update.Response> {
    const response = await core.fetcher({
      url: urlJoin(this.options.environment ?? environments.Environment.Production, "/projects/project"),
      method: "POST",
      headers: {
        Authorization: core.BasicAuth.toAuthorizationHeader(await core.Supplier.get(this.options.auth?.credentials)),
      },
      body: serializers.projects.UpdateProjectRequest.json(request),
    });
    if (response.ok) {
      return {
        ok: true,
        body: serializers.projects.Project.parse(response.body as serializers.projects.Project.Raw),
      };
    }

    return {
      ok: false,
      error: {
        errorName: undefined,
        content: response.error,
        _visit: (visitor) => visitor._other(response.error),
      },
    };
  }

  public async delete(request: DopplerApi.projects.DeleteProjectRequest): Promise<DopplerApi.projects.delete.Response> {
    const response = await core.fetcher({
      url: urlJoin(this.options.environment ?? environments.Environment.Production, "/projects/project"),
      method: "DELETE",
      headers: {
        Authorization: core.BasicAuth.toAuthorizationHeader(await core.Supplier.get(this.options.auth?.credentials)),
      },
      body: serializers.projects.DeleteProjectRequest.json(request),
    });
    if (response.ok) {
      return {
        ok: true,
        body: undefined,
      };
    }

    return {
      ok: false,
      error: {
        errorName: undefined,
        content: response.error,
        _visit: (visitor) => visitor._other(response.error),
      },
    };
  }
}
