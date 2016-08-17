import React from 'react'

export default React.createClass({
  getPair: function () {
    return this.props.pair || []
  },
  isDisabled: function () {
    return !!this.props.hasVoted
  },
  hasVoted: function (entry) {
    return this.props.hasVoted === entry
  },
  render: function () {
    return <div className="voting">
      {this.getPair().map(entry =>
        <button key={entry}
                disbled={this.isDisabled()}
                onClick={() => this.props.vote(entry)}>
          <h1>{entry}</h1>
          {this.hasVoted(entry) ?
            <div className="label">Voted</div> :
             null}
        </button> 
      )}
    </div>

  }
})