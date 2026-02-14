# Postmortem: Health Endpoint Outage

- Date: 2026-02-14
- Service: Dive Venturer Web API
- Endpoint: /api/health
- Severity: Low (SEV-3)
- Status: Resolved
- Type: Simulated Incident (Chaos / Training)

## Summary

On 2026-02-14, the /api/health endpoint of the Dive Venturer application was intentionally modified to return HTTP 500 responses in order to simulate a production incident. The incident was used as a controlled exercise to validate observability, logging, deployment flow, and incident response practices.

## Impact

- The /api/health endpoint returned HTTP 500 instead of HTTP 200.
- No end users were affected, as this endpoint is used only for health checks.
- No data loss occurred.
- The main application UI remained fully functional.

## Timeline

- 11:50 UTC – Code change introduced to simulate failure in /api/health.
- 11:52 UTC – CI pipeline completed successfully.
- 11:54 UTC – Deployment completed on production.
- 11:55 UTC – HTTP 500 responses confirmed via browser.
- 11:56 UTC – Error logs observed in production logs.
- 12:00 UTC – Incident validated and documented.

## Detection

The incident was detected manually by:

- Accessing /api/health in the browser.
- Observing structured error logs in production:

```json
{
  "level": "error",
  "message": "health_check_failed"
}
```

This confirmed that the serverless function executed and logging worked as expected.

## Root Cause

The root cause was an intentional code change that forced the /api/health endpoint to return an error response (HTTP 500) for the purpose of incident simulation and SRE training.

## Resolution

The incident will be resolved by reverting the simulated failure and restoring the endpoint to return HTTP 200 responses.

## Lessons Learned

- Structured logging provides significantly better observability than plain console.error.
- CI/CD correctly allowed deployment of a failing runtime, which is expected behavior.
- Production logs were accessible and sufficient to diagnose the issue.
- The deployment and rollback flow is fast and reliable.

## Action Items

| Action                                    | Owner | Status  |
| ----------------------------------------- | ----- | ------- |
| Define SLI for `/api/health` availability | Alex  | Pending |
| Define SLO for health endpoint            | Alex  | Pending |
| Restore healthy behavior of `/api/health` | Alex  | Pending |
| Add runbook for health check failures     | Alex  | Pending |

## Follow-up

This incident will be used as a baseline to:

- Define Service Level Indicators (SLIs)
- Define Service Level Objectives (SLOs)
- Establish an initial error budget
- Improve incident response maturity
