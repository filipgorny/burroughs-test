# The Burroughs Test

Returns dates of payment.

For premium payments, returns 15th day of the month unless its a weekend, then returns the upcoming Wednesday.

For basic payments, return last day of the month, unless its a weekend, then returns the previous Friday.

## Usage

`npm run start`

Go to the url `http://localhost:8080/dates?from=DATE`

where `DATE` is the date from which the api should start
