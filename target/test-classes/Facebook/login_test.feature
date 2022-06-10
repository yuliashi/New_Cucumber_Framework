Feature: Facebook login1

Scenario Outline: Verify user cannot login with invalid credentials
Given I am on the facebook landing page
When I enter <username> in login username
And I enter <password> in login password
And I click on login button
Then I verify error is displayed
Examples:
| username      | password                    |
| $%^&*(        | abcd@1234                   |
| var@gmail.com | valkdfjklsdhfkljsdhf;s@1234 |

Scenario: Verify user cannot login with empty credentials
Given I am on the facebook landing page
And I click on login button
Then I verify error is displayed