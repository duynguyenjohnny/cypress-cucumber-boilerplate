Feature: Submit work sample page

    Feature Submit work sample page will work depending on the user information input.

    Background:
        Given A web browser is at the work sample page
    Scenario: Success Submit
        When A user fills all requirement information, and clicks on the submit button
        Then the successfully messages appears
    Scenario: Incorrect Submit
        When A user are missing information, and clicks on the submit button
        Then The red warning appears