$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AlertPopUp.feature");
formatter.feature({
  "line": 2,
  "name": "Behavior on Dialogs and Alerts",
  "description": "",
  "id": "behavior-on-dialogs-and-alerts",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@popup"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "Answer the prompt box",
  "description": "",
  "id": "behavior-on-dialogs-and-alerts;answer-the-prompt-box",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "the page \"http://www.w3schools.com/js/tryit.asp?filename\u003dtryjs_prompt\" is visited",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "go inside the \"id\u003diframeResult\" frame",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "input \"Baymax\" on prompt dialog box \"css\u003dbutton\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "assert that the text \"id\u003ddemo\" element is \"Hello Baymax! How are you today?\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.w3schools.com/js/tryit.asp?filename\u003dtryjs_prompt",
      "offset": 10
    }
  ],
  "location": "AlertPopUp.the_page_is_visited(String)"
});
formatter.result({
  "duration": 10972912958,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "id\u003diframeResult",
      "offset": 15
    }
  ],
  "location": "AlertPopUp.go_inside_the_frame(String)"
});
formatter.result({
  "duration": 97662485,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Baymax",
      "offset": 7
    },
    {
      "val": "css\u003dbutton",
      "offset": 37
    }
  ],
  "location": "AlertPopUp.input_on_prompt_dialog_box(String,String)"
});
formatter.result({
  "duration": 204195728,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "id\u003ddemo",
      "offset": 22
    },
    {
      "val": "Hello Baymax! How are you today?",
      "offset": 43
    }
  ],
  "location": "AlertPopUp.assert_that_the_text_element_is_Ok(String,String)"
});
formatter.result({
  "duration": 30262028,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Dimiss the confirm box",
  "description": "",
  "id": "behavior-on-dialogs-and-alerts;dimiss-the-confirm-box",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "the page \"http://www.w3schools.com/js/tryit.asp?filename\u003dtryjs_confirm\" is visited",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "go inside the \"id\u003diframeResult\" frame",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "choose CANCEL on confirm dialog box \"css\u003dbutton\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "assert that the text \"id\u003ddemo\" element is \"You pressed Cancel!\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.w3schools.com/js/tryit.asp?filename\u003dtryjs_confirm",
      "offset": 10
    }
  ],
  "location": "AlertPopUp.the_page_is_visited(String)"
});
formatter.result({
  "duration": 822000433,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "id\u003diframeResult",
      "offset": 15
    }
  ],
  "location": "AlertPopUp.go_inside_the_frame(String)"
});
formatter.result({
  "duration": 32456067,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "css\u003dbutton",
      "offset": 37
    }
  ],
  "location": "AlertPopUp.choose_CANCEL_on_confirm_dialog_box(String)"
});
formatter.result({
  "duration": 114289355,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "id\u003ddemo",
      "offset": 22
    },
    {
      "val": "You pressed Cancel!",
      "offset": 43
    }
  ],
  "location": "AlertPopUp.assert_that_the_text_element_is_Ok(String,String)"
});
formatter.result({
  "duration": 25002618,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Accept the confirm box",
  "description": "",
  "id": "behavior-on-dialogs-and-alerts;accept-the-confirm-box",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 17,
  "name": "the page \"http://www.w3schools.com/js/tryit.asp?filename\u003dtryjs_confirm\" is visited",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "go inside the \"id\u003diframeResult\" frame",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "choose OK on confirm dialog box \"css\u003dbutton\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "assert that the text \"id\u003ddemo\" element is \"You pressed OK!\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.w3schools.com/js/tryit.asp?filename\u003dtryjs_confirm",
      "offset": 10
    }
  ],
  "location": "AlertPopUp.the_page_is_visited(String)"
});
formatter.result({
  "duration": 4164962054,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "id\u003diframeResult",
      "offset": 15
    }
  ],
  "location": "AlertPopUp.go_inside_the_frame(String)"
});
formatter.result({
  "duration": 25610735,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "css\u003dbutton",
      "offset": 33
    }
  ],
  "location": "AlertPopUp.choose_OK_on_confirm_dialog_box(String)"
});
formatter.result({
  "duration": 130772399,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "id\u003ddemo",
      "offset": 22
    },
    {
      "val": "You pressed OK!",
      "offset": 43
    }
  ],
  "location": "AlertPopUp.assert_that_the_text_element_is_Ok(String,String)"
});
formatter.result({
  "duration": 31160589,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Verify text on the popup",
  "description": "",
  "id": "behavior-on-dialogs-and-alerts;verify-text-on-the-popup",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 23,
  "name": "the page \"http://www.w3schools.com/js/tryit.asp?filename\u003dtryjs_confirm\" is visited",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "go inside the \"id\u003diframeResult\" frame",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "assert that text on \"css\u003dbutton\" popup box is \"Please enter your name\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.w3schools.com/js/tryit.asp?filename\u003dtryjs_confirm",
      "offset": 10
    }
  ],
  "location": "AlertPopUp.the_page_is_visited(String)"
});
formatter.result({
  "duration": 598341467,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "id\u003diframeResult",
      "offset": 15
    }
  ],
  "location": "AlertPopUp.go_inside_the_frame(String)"
});
formatter.result({
  "duration": 19201419,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "css\u003dbutton",
      "offset": 21
    },
    {
      "val": "Please enter your name",
      "offset": 47
    }
  ],
  "location": "AlertPopUp.assert_that_text_on_popup_box_is(String,String)"
});
formatter.result({
  "duration": 116923249,
  "error_message": "org.junit.ComparisonFailure: expected:\u003cP[lease enter your name]\u003e but was:\u003cP[ress a button!]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat definition.AlertPopUp.assert_that_text_on_popup_box_is(AlertPopUp.java:100)\r\n\tat ✽.Then assert that text on \"css\u003dbutton\" popup box is \"Please enter your name\"(AlertPopUp.feature:25)\r\n",
  "status": "failed"
});
formatter.uri("Attribute.feature");
formatter.feature({
  "line": 1,
  "name": "General Steps",
  "description": "",
  "id": "general-steps",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Element attribute in English",
  "description": "",
  "id": "general-steps;element-attribute-in-english",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "the page \"http://live.guru99.com/\" is visited",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "assert that the \"alt\" attribute of \"xpath\u003d//div[2]/a/img\" is \"Additional Options\"",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "assert that the \"title\" attribute of \"xpath\u003d//div[2]/a/img\" is \"Additional Options\"",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "assert that the \"src\" attribute of \"xpath\u003d//div[2]/a/img\" is \"https://www.paypalobjects.com/en_US/i/bnr/bnr_nowAccepting_150x60.gif\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "assert that the \"src\" attribute of \"xpath\u003d//div[2]/a/img\" has \"bnr_nowAccepting_150x60.gif\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "assert that the \"src\" attribute of \"xpath\u003d//div[2]/a/img\" does not have \"bnr_nowAccepting.gif\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "assert that the \"src\" attribute of \"xpath\u003d//div[2]/a/img\" is not \"https://www.paypalobjects.com\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://live.guru99.com/",
      "offset": 10
    }
  ],
  "location": "AlertPopUp.the_page_is_visited(String)"
});
formatter.result({
  "duration": 4952598636,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "alt",
      "offset": 17
    },
    {
      "val": "xpath\u003d//div[2]/a/img",
      "offset": 36
    },
    {
      "val": "Additional Options",
      "offset": 62
    }
  ],
  "location": "Attribute.assert_that_the_attribute_of_is(String,String,String)"
});
formatter.result({
  "duration": 39256365,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "title",
      "offset": 17
    },
    {
      "val": "xpath\u003d//div[2]/a/img",
      "offset": 38
    },
    {
      "val": "Additional Options",
      "offset": 64
    }
  ],
  "location": "Attribute.assert_that_the_attribute_of_is(String,String,String)"
});
formatter.result({
  "duration": 20662366,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "src",
      "offset": 17
    },
    {
      "val": "xpath\u003d//div[2]/a/img",
      "offset": 36
    },
    {
      "val": "https://www.paypalobjects.com/en_US/i/bnr/bnr_nowAccepting_150x60.gif",
      "offset": 62
    }
  ],
  "location": "Attribute.assert_that_the_attribute_of_is(String,String,String)"
});
formatter.result({
  "duration": 23889017,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "src",
      "offset": 17
    },
    {
      "val": "xpath\u003d//div[2]/a/img",
      "offset": 36
    },
    {
      "val": "bnr_nowAccepting_150x60.gif",
      "offset": 63
    }
  ],
  "location": "Attribute.assert_that_the_attribute_of_has(String,String,String)"
});
formatter.result({
  "duration": 18253287,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "src",
      "offset": 17
    },
    {
      "val": "xpath\u003d//div[2]/a/img",
      "offset": 36
    },
    {
      "val": "bnr_nowAccepting.gif",
      "offset": 73
    }
  ],
  "location": "Attribute.assert_that_the_attribute_of_does_not_have(String,String,String)"
});
formatter.result({
  "duration": 17953767,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "src",
      "offset": 17
    },
    {
      "val": "xpath\u003d//div[2]/a/img",
      "offset": 36
    },
    {
      "val": "https://www.paypalobjects.com",
      "offset": 66
    }
  ],
  "location": "Attribute.assert_that_the_attribute_of_is_not(String,String,String)"
});
formatter.result({
  "duration": 18772734,
  "status": "passed"
});
formatter.uri("Browser.feature");
formatter.feature({
  "line": 1,
  "name": "Window",
  "description": "",
  "id": "window",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Demo in English version",
  "description": "",
  "id": "window;demo-in-english-version",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@lastOne"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "the home page is visited",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "the page \"http://live.guru99.com/\" is visited",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "the page is refreshed",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "maximize the window",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "go backward one page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "go forward one page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "the page \"https://cucumber.io/\" is opened on another window",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "assert that the \"Describe behaviour in plain text\" text is present",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "assert that the \"Write a step definition in Java\" text is not present",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "assert that the page title is \"Cucumber\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "assert that the page title is not \"Serenity BDD\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "assert that the page title has \"Cu\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "assert that the page title does not have \"Cucun\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "assert that the url is \"https://cucumber.io/\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "assert that the url is not \"https://cucumber.com/\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "window dimension is changed with size (300,500)",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "scroll up or down in screen with value (0,1000)",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "window is moved to location with coordinates (200,300)",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "close current window",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "switch back to the original window",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "open \"link\u003dTV\" link in new window and switch to it",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "close current window",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "switch back to the original window",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "open \"css\u003dimg[alt\u003d\u0027Additional Options\u0027]\" dialog and switch to it",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "window is moved to location with coordinates (150,200)",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "maximize the window",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "close current window",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "switch back to the original window",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "window dimension is changed with size (300,500)",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "window is moved to location with coordinates (100,200)",
  "keyword": "And "
});
formatter.match({
  "location": "Browser.the_home_page_is_visited()"
});
formatter.result({
  "duration": 2296473480,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://live.guru99.com/",
      "offset": 10
    }
  ],
  "location": "AlertPopUp.the_page_is_visited(String)"
});
formatter.result({
  "duration": 3251727304,
  "status": "passed"
});
formatter.match({
  "location": "Browser.the_page_is_refreshed()"
});
formatter.result({
  "duration": 3552759566,
  "status": "passed"
});
formatter.match({
  "location": "Browser.maximize_the_window()"
});
formatter.result({
  "duration": 360933889,
  "status": "passed"
});
formatter.match({
  "location": "Browser.go_backward_one_page()"
});
formatter.result({
  "duration": 21717320,
  "status": "passed"
});
formatter.match({
  "location": "Browser.go_forward_one_page()"
});
formatter.result({
  "duration": 977223538,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://cucumber.io/",
      "offset": 10
    }
  ],
  "location": "Browser.the_page_is_opened_on_another_window(String)"
});
formatter.result({
  "duration": 2706565710,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Describe behaviour in plain text",
      "offset": 17
    }
  ],
  "location": "Browser.assert_that_the_text_is_present(String)"
});
formatter.result({
  "duration": 10593464661,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat definition.Browser.assert_that_the_text_is_present(Browser.java:83)\r\n\tat ✽.Then assert that the \"Describe behaviour in plain text\" text is present(Browser.feature:11)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Write a step definition in Java",
      "offset": 17
    }
  ],
  "location": "Browser.assert_that_the_text_is_not_present(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Cucumber",
      "offset": 31
    }
  ],
  "location": "Browser.assert_that_the_page_title_is(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Serenity BDD",
      "offset": 35
    }
  ],
  "location": "Browser.assert_that_the_page_title_is_not(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Cu",
      "offset": 32
    }
  ],
  "location": "Browser.assert_that_the_page_title_has(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Cucun",
      "offset": 42
    }
  ],
  "location": "Browser.assert_that_the_page_title_does_not_have(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "https://cucumber.io/",
      "offset": 24
    }
  ],
  "location": "Browser.assert_that_the_url_is(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "https://cucumber.com/",
      "offset": 28
    }
  ],
  "location": "Browser.assert_that_the_url_is_not(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "300",
      "offset": 39
    },
    {
      "val": "500",
      "offset": 43
    }
  ],
  "location": "Browser.window_dimension_is_changed_with_size(int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 40
    },
    {
      "val": "1000",
      "offset": 42
    }
  ],
  "location": "Browser.scroll_up_or_down_in_screen_with_value(int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 46
    },
    {
      "val": "300",
      "offset": 50
    }
  ],
  "location": "Browser.window_is_moved_to_location_with_coordinates(int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Browser.close_current_window()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Browser.switch_back_to_the_original_window()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "link\u003dTV",
      "offset": 6
    }
  ],
  "location": "Browser.open_link_in_new_window_and_switch_to_it(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Browser.close_current_window()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Browser.switch_back_to_the_original_window()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "css\u003dimg[alt\u003d\u0027Additional Options\u0027]",
      "offset": 6
    }
  ],
  "location": "Browser.open_dialog_and_switch_to_it(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "150",
      "offset": 46
    },
    {
      "val": "200",
      "offset": 50
    }
  ],
  "location": "Browser.window_is_moved_to_location_with_coordinates(int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Browser.maximize_the_window()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Browser.close_current_window()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Browser.switch_back_to_the_original_window()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "300",
      "offset": 39
    },
    {
      "val": "500",
      "offset": 43
    }
  ],
  "location": "Browser.window_dimension_is_changed_with_size(int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 46
    },
    {
      "val": "200",
      "offset": 50
    }
  ],
  "location": "Browser.window_is_moved_to_location_with_coordinates(int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("ElementText.feature");
formatter.feature({
  "line": 1,
  "name": "General Steps",
  "description": "",
  "id": "general-steps",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Element text in English",
  "description": "",
  "id": "general-steps;element-text-in-english",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "the page \"https://cucumber.io/\" is visited",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "assert that the text \"css\u003dh1[title\u003d\u0027Cucumber\u0027]\" element is \"Simple, human collaboration\"",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "assert that the text \"css\u003dh1[title\u003d\u0027Cucumber\u0027]\" element is not \"human collaboration\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "assert that the text \"css\u003dh1[title\u003d\u0027Cucumber\u0027]\" element has \"collaboration\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "assert that the text \"css\u003dh1[title\u003d\u0027Cucumber\u0027]\" element does not have \"Simples\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://cucumber.io/",
      "offset": 10
    }
  ],
  "location": "AlertPopUp.the_page_is_visited(String)"
});
formatter.result({
  "duration": 716758478,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "css\u003dh1[title\u003d\u0027Cucumber\u0027]",
      "offset": 22
    },
    {
      "val": "Simple, human collaboration",
      "offset": 60
    }
  ],
  "location": "AlertPopUp.assert_that_the_text_element_is_Ok(String,String)"
});
formatter.result({
  "duration": 347352142,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "css\u003dh1[title\u003d\u0027Cucumber\u0027]",
      "offset": 22
    },
    {
      "val": "human collaboration",
      "offset": 64
    }
  ],
  "location": "ElementText.assert_that_the_text_element_is_not(String,String)"
});
formatter.result({
  "duration": 22939488,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "css\u003dh1[title\u003d\u0027Cucumber\u0027]",
      "offset": 22
    },
    {
      "val": "collaboration",
      "offset": 61
    }
  ],
  "location": "ElementText.assert_that_the_text_element_has(String,String)"
});
formatter.result({
  "duration": 20832373,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "css\u003dh1[title\u003d\u0027Cucumber\u0027]",
      "offset": 22
    },
    {
      "val": "Simples",
      "offset": 71
    }
  ],
  "location": "ElementText.assert_that_the_text_element_does_not_have(String,String)"
});
formatter.result({
  "duration": 22096084,
  "status": "passed"
});
formatter.uri("Frame.feature");
formatter.feature({
  "line": 1,
  "name": "Frame",
  "description": "",
  "id": "frame",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "General and Frame steps in English",
  "description": "",
  "id": "frame;general-and-frame-steps-in-english",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@important"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "the page \"http://www.w3schools.com/tags/tryit.asp?filename\u003dtryhtml_input_disabled\" is visited",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "go inside the \"id\u003diframeResult\" frame",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "assert that the \"name\u003dfname\" element is enabled",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "assert that the \"name\u003dlname\" element is disabled",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "assert that the \"xpath\u003d//input[@type\u003d\u0027submit\u0027]\" element is present",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "assert that the \"xpath\u003d//input[@type\u003d\u0027password\u0027]\" element is absent",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "the page \"http://www.w3schools.com/tags/tryit.asp?filename\u003dtryhtml5_input_type_hidden\" is visited",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "go inside the \"id\u003diframeResult\" frame",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "assert that the \"value\" attribute of \"name\u003dcountry\" is \"Norway\"",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "assert that the \"name\u003dcountry\" element is hidden",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "change \"type\" attribute of \"name\u003dcountry\" into \"display\"",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "assert that the \"name\u003dcountry\" element is visible",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "change \"value\" attribute of \"name\u003dcountry\" into \"VIETNAM\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "assert that the \"value\" attribute of \"name\u003dcountry\" is \"VIETNAM\"",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "highlight \"name\u003dcountry\" element",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "set bound for \"name\u003dcountry\" element",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "capture image of \"name\u003dcountry\" element and save as \"norway.png\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.w3schools.com/tags/tryit.asp?filename\u003dtryhtml_input_disabled",
      "offset": 10
    }
  ],
  "location": "AlertPopUp.the_page_is_visited(String)"
});
formatter.result({
  "duration": 12475051840,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "id\u003diframeResult",
      "offset": 15
    }
  ],
  "location": "AlertPopUp.go_inside_the_frame(String)"
});
formatter.result({
  "duration": 47920114,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name\u003dfname",
      "offset": 17
    }
  ],
  "location": "Frame.assert_that_the_element_is_enabled(String)"
});
formatter.result({
  "duration": 58448708,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name\u003dlname",
      "offset": 17
    }
  ],
  "location": "Frame.assert_that_the_element_is_disabled(String)"
});
formatter.result({
  "duration": 42725636,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xpath\u003d//input[@type\u003d\u0027submit\u0027]",
      "offset": 17
    }
  ],
  "location": "Frame.assert_that_the_element_is_present(String)"
});
formatter.result({
  "duration": 91183001,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xpath\u003d//input[@type\u003d\u0027password\u0027]",
      "offset": 17
    }
  ],
  "location": "Frame.assert_that_the_element_is_absent(String)"
});
formatter.result({
  "duration": 88320,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.w3schools.com/tags/tryit.asp?filename\u003dtryhtml5_input_type_hidden",
      "offset": 10
    }
  ],
  "location": "AlertPopUp.the_page_is_visited(String)"
});
formatter.result({
  "duration": 997818528,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "id\u003diframeResult",
      "offset": 15
    }
  ],
  "location": "AlertPopUp.go_inside_the_frame(String)"
});
formatter.result({
  "duration": 43624895,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "value",
      "offset": 17
    },
    {
      "val": "name\u003dcountry",
      "offset": 38
    },
    {
      "val": "Norway",
      "offset": 56
    }
  ],
  "location": "Attribute.assert_that_the_attribute_of_is(String,String,String)"
});
formatter.result({
  "duration": 21016345,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name\u003dcountry",
      "offset": 17
    }
  ],
  "location": "Frame.assert_that_the_element_is_hidden(String)"
});
formatter.result({
  "duration": 25333208,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "type",
      "offset": 8
    },
    {
      "val": "name\u003dcountry",
      "offset": 28
    },
    {
      "val": "display",
      "offset": 48
    }
  ],
  "location": "Frame.change_attribute_of_into(String,String,String)"
});
formatter.result({
  "duration": 24239505,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name\u003dcountry",
      "offset": 17
    }
  ],
  "location": "Frame.assert_that_the_element_is_visible(String)"
});
formatter.result({
  "duration": 41848718,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "value",
      "offset": 8
    },
    {
      "val": "name\u003dcountry",
      "offset": 29
    },
    {
      "val": "VIETNAM",
      "offset": 49
    }
  ],
  "location": "Frame.change_attribute_of_into(String,String,String)"
});
formatter.result({
  "duration": 42544456,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "value",
      "offset": 17
    },
    {
      "val": "name\u003dcountry",
      "offset": 38
    },
    {
      "val": "VIETNAM",
      "offset": 56
    }
  ],
  "location": "Attribute.assert_that_the_attribute_of_is(String,String,String)"
});
formatter.result({
  "duration": 62694008,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name\u003dcountry",
      "offset": 11
    }
  ],
  "location": "Frame.highlight_element(String)"
});
formatter.result({
  "duration": 68193243,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name\u003dcountry",
      "offset": 15
    }
  ],
  "location": "Frame.set_bound_for_element(String)"
});
formatter.result({
  "duration": 25364975,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name\u003dcountry",
      "offset": 18
    },
    {
      "val": "norway.png",
      "offset": 53
    }
  ],
  "location": "Frame.capture_image_of_element_and_save_as(String,String)"
});
formatter.result({
  "duration": 569311383,
  "status": "passed"
});
formatter.after({
  "duration": 826726082,
  "status": "passed"
});
});