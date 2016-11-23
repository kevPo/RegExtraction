import { Component } from '@angular/core';
import { FormsModule }   from '@angular/forms';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html'
})
export class AppComponent { 

    rawText = '';
    results = 'here ya go';
    regularExpression = '';
    foundClass = '';
    resultsFound = '0 results found';
    blah = '';
    //\(ID: (.*?)\)

    doIt() {
        var inputElement = document.getElementById('divput');
        var inputString = inputElement.innerHTML;

        if (this.regularExpression) {
            var regEx = new RegExp(this.regularExpression, 'g');
            var results = inputString.match(regEx);
            
            if (results) {
                this.foundClass = 'matches';
                this.resultsFound = results.length + ' results found';
                
            }
            else {
                this.foundClass = 'no-matches';
                this.resultsFound = '0 results found';
            } 
            // this.saveSelection();
            inputElement.innerHTML = inputElement.innerHTML.replace(/(<([^>]+)>)/ig,"");
            inputElement.innerHTML = inputElement.innerHTML.replace(regEx, "<span class='selected'>$&</span>");
            // this.restoreSelection();
        }
        else {
            this.foundClass = '';
            this.resultsFound = '0 results found';
        }
    }

    contentDoIt () {
        var inputElement = document.getElementById('divput');
        var inputString = inputElement.innerHTML;

        if (this.regularExpression) {
            var regEx = new RegExp(this.regularExpression, 'g');
            var results = inputString.match(regEx);
            
            if (results) {
                this.foundClass = 'matches';
                this.resultsFound = results.length + ' results found';
                
            }
            else {
                this.foundClass = 'no-matches';
                this.resultsFound = '0 results found';
            } 
            inputElement.innerHTML = inputElement.innerHTML.replace(/(<([^>]+)>)/ig,"");
            inputElement.innerHTML = inputElement.innerHTML.replace(regEx, "<span class='selected'>$&</span>");
            this.focusEnd();
        }
        else {
            this.foundClass = '';
            this.resultsFound = '0 results found';
        }
    }

    focusEnd() {
        var element = document.getElementById('divput');
         element.focus();
        var tmp: any = $('<span />').appendTo('#divput');
        var node = tmp.get(0);
        var range: any = null;
        var sel: any = null;


        if (window.getSelection) {
            range = document.createRange();
            range.selectNode(node);
            sel = window.getSelection();
            sel.removeAllRanges();
            sel.addRange(range);
        }
        tmp.remove();
    }
}
