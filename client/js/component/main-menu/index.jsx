const React = require('react');
const {connect} = require('react-redux');
const {destroySession} = require('../../session/action');

class DrexelMainMenu extends React.Component {
  constructor(props) {
    super(props);

    this.logOff = this.logOff.bind(this);
    this.visibleClass = this.visibleClass.bind(this);
  }

  logOff(event) {
    this.props.destroySession();
  }

  visibleClass() {
    if (this.props.token !== '' && this.props.screen === 'main-menu') {
      return 'd-block';
    }

    return 'd-none';
  }

  render() {
    return (
      <div className={this.visibleClass()}>
        <div className="container">
          <div className="row">
            <div className="col">
              <button type="button" class="btn btn-primary btn-lg btn-block mt-2">Game Administration</button>
              <button type="button" class="btn btn-primary btn-lg btn-block mt-2">Play Game</button>
              <button onClick={this.logOff} type="button" class="btn btn-secondary btn-lg btn-block mt-4">Log Off</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const {
    token,
    screen,
  } = state;

  return {
    token,
    screen,
  };
};

const mapDispatchToProps = {
  destroySession,
};

const connectMappings = connect(
  mapStateToProps,
  mapDispatchToProps,
);

module.exports.DrexelMainMenu = connectMappings(DrexelMainMenu);