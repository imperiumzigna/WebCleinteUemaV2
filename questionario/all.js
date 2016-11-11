/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* quiz */
(function (document) {
    "use strict";
    /*jslint plusplus: true, browser: true*/


    Array.prototype.sum = function () {
        var total = 0,
            i = this.length;

        while (i--) {
            total += parseInt(this[i], 10);
        }
        return total;
    };
    function loop($els, cb) {
        var i = $els.length;

        while (i > 0) {
            i -= 1;
            cb($els[i]);
        }
    }


    var $formRadios = document.querySelectorAll('.quiz-form-radios'),
        $formUser = document.querySelector('#quiz-form-user'),
        $quizForm = document.querySelectorAll('.quiz-form'),
        $quizLastForm = document.querySelector('#quiz-form-last'),
        $quizQuestions = document.querySelectorAll('.quiz-question-item'),
        $quizPagers = document.querySelectorAll('.quiz-pager-item'),

        $answerProduct = document.querySelectorAll('.quiz-answer-product'),
        $answer1 = document.querySelector('#quiz-answer-1'),
        $answer2 = document.querySelector('#quiz-answer-2'),
        $answer3 = document.querySelector('#quiz-answer-3'),
        $answer4 = document.querySelector('#quiz-answer-4'),
        $linkAgain = document.querySelector('.link-again'),

        $name = $formUser.querySelector("input[name='name']"),
        $email = $formUser.querySelector("input[name='email']"),
        answers = {};


    $($formUser).submit( function () {
        answers.user = [];

        if ($name.value !== '' && $email.value !== '') {
            $(this).attr('data-answer', 'answered');
        }
    });


    loop($formRadios, function ($form) {
        $form.addEventListener("submit", function () {
            var $radio = $($form).eq('input[type="radio"]:checked');

            if ($radio) {
                answers.user.push($radio.value);
                $(this).attr('data-answer', 'answered');
            }

        });
    });



    loop($quizForm, function ($form) {
        $form.addEventListener("submit", function (e) {
            e.preventDefault();

            var $parent = this.parentNode,
                next = Array.prototype.slice.call($quizForm).indexOf(this) + 1;

            if (this.getAttribute('data-answer') === 'answered') {
                loop($quizPagers, function ($pager) {
                    $($pager).removeClass('is-active');
                });


                $($quizPagers[next]).addClass('is-active');
                $($quizQuestions[next]).addClass('is-active');
                $($parent).removeClass('is-active');
            } else {
                $(this).addClass('quiz-form-error');
            }

        });
    });


    $($quizLastForm).submit( function () {
        var answer = answers.user.sum();

        loop($answerProduct, function ($answer) {
            $($answer).addClass('is-hidden');
        });


        if (answer >= 16) {
            $($answer1).removeClass('is-hidden');
            return;
        }
        if (answer >= 10) {
            $($answer2).removeClass('is-hidden');
            return;
        }
        if (answer >= 6) {
            $($answer3).removeClass('is-hidden');
            return;
        }

        $($answer4).removeClass('is-hidden');
    });


    $($linkAgain).click( function () {
        e.preventDefault();

        loop($quizPagers, function ($pager) {
            $($pager).removeClass('is-active');
        });
        $($quizPagers[0]).addClass('is-active');
    });

    $($linkAgain).click( function () {
        loop($quizQuestions, function ($question) {
            $($question).removeClass('is-active');
        });
        $($quizQuestions[0]).addClass('is-active');
    });


}(document));
