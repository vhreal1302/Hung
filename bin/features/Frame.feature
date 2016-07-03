Feature: Frame
	@important
  Scenario: General and Frame steps in English
    Given the page "http://www.w3schools.com/tags/tryit.asp?filename=tryhtml_input_disabled" is visited
    And go inside the "id=iframeResult" frame
    Then assert that the "name=fname" element is enabled
    And assert that the "name=lname" element is disabled
    And assert that the "xpath=//input[@type='submit']" element is present
    And assert that the "xpath=//input[@type='password']" element is absent
    When the page "http://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_input_type_hidden" is visited
    And go inside the "id=iframeResult" frame
    Then assert that the "value" attribute of "name=country" is "Norway"
    And assert that the "name=country" element is hidden
    When change "type" attribute of "name=country" into "display"
    Then assert that the "name=country" element is visible
    When change "value" attribute of "name=country" into "VIETNAM"
    Then assert that the "value" attribute of "name=country" is "VIETNAM"
    When highlight "name=country" element
    And set bound for "name=country" element
    And capture image of "name=country" element and save as "norway.png"