var React = require('react');

var DictionaryForm = React.createClass ({
    onFormSubmit: function(e) {
        e.preventDefault();
        
        var word = "stupid string";
        console.log(word);

        if(word.length > 0) {
          
            this.props.onSearch(word);
        }
    },
    render: function() {
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input type="search" placeholder="enter word" onChange={this.handleSearchChange}/>
                    <button className="button expanded hollow"> Find in Dictionary </button>
                </form>
            </div>
        );
    }
});

module.exports = DictionaryForm;