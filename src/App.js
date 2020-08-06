import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import './Assets/avenirnextcyr-medium.css';
import { Auth } from './Auth/Auth';
import { Registration } from './Auth/Registration';
import { RegistrationDone } from './Auth/RegistrationDone'

function App() {
	// eslint-disable-next-line
	const [isAuth, setIsAuth] = useState(false);
	return (
		<div className="App">
			<Router>
				<Switch>
					{isAuth ? (
						''
					) : (
						<>
							<Route exact path="/auth">
								<Auth />
							</Route>
							<Route exact path="/registration">
								<Registration />
							</Route>
							<Route exact path="/done">
								<RegistrationDone />
							</Route>
						</>
					)}

					<Route>" "</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
