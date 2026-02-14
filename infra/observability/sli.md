# Service Level Indicator (SLI)

## Service

Dive Venturer Web API

## Endpoint

/api/health

## Indicator

Availability

## Definition

The SLI measures the percentage of successful HTTP responses (status 200)
returned by the `/api/health` endpoint over a given time window.

## Good Events

- HTTP 200 responses

## Bad Events

- Any non-200 HTTP responses
- Function execution errors
- Timeouts

## Calculation

SLI = successful requests / total requests
