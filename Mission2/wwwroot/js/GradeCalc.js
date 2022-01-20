//Check for button press
$("#calculate").click(function () {
    //save percentage of each grade
    assignmentPct = 55
    projectPct = 5
    quizPct = 10
    examPct = 20
    intexPct = 10

    //save each section as a variable
    assignmentGrade = $("#assignments").val()
    projectGrade = $("#project").val()
    quizGrade = $("#quizzes").val()
    examGrade = $("#exams").val()
    intexGrade = $("#intex").val()

    //calculate portion of total grade by multiplying the percentage of final grade by the actual grade percentage divided by 100

    assignmentPortion = assignmentPct * (assignmentGrade / 100)
    projectPortion = projectPct * (projectGrade / 100)
    quizPortion = quizPct * (quizGrade / 100)
    examPortion = examPct * (examGrade / 100)
    intexPortion = intexPct * (intexGrade / 100)

    //add all the portions together to get the final grade (rounded)
    finalGrade = Math.round(assignmentPortion + projectPortion + quizPortion + examPortion + intexPortion)

    //calculate letter grade and give a reaction and grammatically correct letter preceeding the letter grade
    if (finalGrade >= 94) {
        letterGrade = "A"
        reaction = "Excellent Job!"
        precedent = "an"
    }
    else if (finalGrade >= 90) {
        letterGrade = "A-"
        reaction = "So close! Great job anyway!"
        precedent = "an"
    }
    else if (finalGrade >= 87) {
        letterGrade = "B+"
        reaction = "Pretty good overall"
        precedent = "a"
    }
    else if (finalGrade >= 84) {
        letterGrade = "B"
        reaction = "Good job, you could've done better though"
        precedent = "a"
    }
    else if (finalGrade >= 80) {
        letterGrade = "B-"
        reaction = "Alright now, were you really trying your best?"
        precedent = "a"
    }
    else if (finalGrade >= 77) {
        letterGrade = "C+"
        reaction = "Should've studied harder, huh?"
        precedent = "a"
    }
    else if (finalGrade >= 74) {
        letterGrade = "C"
        reaction = "You know what they say, C's get degrees. But how does it reflect on how good you'll be in a future job, huh?"
        precedent = "a"
    }
    else if (finalGrade >= 70) {
        letterGrade = "C-"
        reaction = "C'mon now, what were you doing all semester?"
        precedent = "a"
    }
    else if (finalGrade >= 67) {
        letterGrade = "D+"
        reaction = "Deez Grades aren't good"
    }
    else if (finalGrade >= 64) {
        letterGrade = "D"
        reaction = "D, as in \"Didn't try that hard because I was too busy playing Rocket League\""
        precedent = "a"
    }
    else if (finalGrade >= 60) {
        letterGrade = "D-"
        reaction = "Well.... you passed"
        precedent = "a"
    }
    else {
        letterGrade = "E"
        reaction = "Better luck next time!"
        precedent = "an"
    }

    //output the final grade, letter grade, and reaction
    alert("Your Final Grade is " + finalGrade + "% which is good for " + precedent + " " + letterGrade + "!\n" + reaction)

})