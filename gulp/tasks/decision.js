/**
 * Created by LZBHV4 on 8/22/2016.
 */
module.exports = {

    options : {
        yes:    ['yes', 'ja', 'si', 'oui'],
        no:     ['no','nein', 'no', 'non']
    },

    ask : function (question, defaultvalue, callback, yesvalues, novalues) {
        self = this;

        if (!this.__invalid) {
            this.resetInvalidCase();
        }

        yesvalues = yesvalues ? yesvalues : this.options.yes;
        novalues  = novalues  ? novalues : this.options.no;

        yesvalues = yesvalues.map(function(v) { return v.toLowerCase(); });
        novalues  = novalues.map(function(v) { return v.toLowerCase(); });

        process.stdout.write(question+" ");
        process.stdin.setEncoding('utf8');
        process.stdin.once('data', function(val){
            var result;
            var cleaned = val.trim().toLowerCase();

            if (cleaned == "" && defaultvalue != null) {
                result = defaultvalue;
            }
            else if (yesvalues.indexOf(cleaned) >= 0) {
                result = true;
            }
            else if (novalues.indexOf(cleaned) >= 0) {
                result = false;
            }
            else {
                self.__invalid(question,defaultvalue,callback,yesvalues,novalues);
                return;
            }

            return callback(result);
        });
    },

    invalid: function(callback) {
        this.__invalid = callback;
    },

    invalidCase: function(question, defaultvalue, callback, yesvalues, novalues) {
        process.stdout.write("\nInvalid Response.\n");
        process.stdout.write("Answer either yes : ("+ yesvalues.join(', ')+') \n');
        process.stdout.write("Or no: ("+ novalues.join(', ')+') \n\n');
        this.ask(question, defaultvalue, callback, yesvalues, novalues);
    },

    resetInvalidCase: function() {
        this.invalid(this.invalidCase);
    }

};
