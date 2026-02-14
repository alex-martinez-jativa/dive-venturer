# Monitoring Strategy

## Health Check Monitoring

The `/api/health` endpoint is monitored using a scheduled GitHub Actions
workflow.

### Purpose

The health endpoint is an operational endpoint and is not used by the
end-user application. Its purpose is to:

- Verify that the application runtime is available
- Detect deployment or infrastructure failures
- Provide a reliable signal for availability SLIs/SLOs

### Monitoring Frequency

The endpoint is checked every **30 minutes**.

This interval was intentionally chosen to:

- Balance early incident detection and serverless execution cost
- Avoid excessive consumption of serverless function invocations
- Match the low criticality of the endpoint for end users

### Alerting

If the health endpoint returns a non-200 HTTP status code, an alert is
triggered by automatically creating a GitHub issue.

### Related Documents

- SLI definition: `infra/observability/sli.md`
- SLO definition: `infra/observability/slo.md`
- Incident response: `infra/runbooks/app-down.md`
- Example incident: `infra/postmortems/2026-02-health-endpoint-outage.md`

## SLO Monitor Execution Strategy

The SLO monitor is **not executed on a fixed schedule**.

The GitHub Actions workflow responsible for checking the `/api/health` endpoint is configured to run **manually only** using `workflow_dispatch`.

This decision is intentional and applies to the current stage of the project.

### Rationale

- Avoid unnecessary CI executions
- Prevent artificial traffic to the application
- Keep the project within free-tier limits
- Allow full control when running resilience or incident simulations

### When It Runs

The SLO monitor is executed:

- during development sessions
- before or after incident simulations
- when validating system behavior manually

Scheduled execution may be reintroduced in later stages when real users and defined SLOs exist.
