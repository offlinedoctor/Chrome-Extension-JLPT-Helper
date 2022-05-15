import React from 'react';
import Button from '@mui/material/Button';
import StyleSheet from './StyleSheet.css';
import TextField from '@mui/material/TextField';

class MainBar extends React.Component
{
	constructor()
	{
		super();
		this.onMainBarClick = this.onMainBarClick.bind(this);
		this.ConjugateWord = this.ConjugateWord.bind(this);
	}

	ConjugateWord()
	{
		fetch("https://jisho.org/api/v1/search/words?keyword=" + document.getElementById("conjugatedWord").value)
		.then(word => word.json())
		.then(word => 
		{
			var stringRequest = word.data[0].japanese[0].word;
			var newURL = "http://www.japaneseverbconjugator.com/VerbDetails.asp?txtVerb=" + stringRequest;
			window.open(newURL);	
		});
	}

	onMainBarClick(event)
	{
		console.log(event.target.id);
		
		switch(event.target.id)
		{
			case "drills":
				window.open("https://eigoganbare.com/jlpt/");
				break;
			case "duolingo":
				window.open("https://www.duolingo.com/");
				break;
			case "cheatSheet":
				window.open("https://www.japanistry.com/japanese-grammar-guide/");
				break;
		}
	}
	
	render()
	{
		return(
				<div class="MainBar" style={{padding: "10px", background: "white", borderRadius: "15px"}}>
					<Button style={{marginBottom: "15px", backgroundColor: "#ab47bc"}} id="drills" onClick={this.onMainBarClick} variant="contained">JLPT Drills</Button>
					<Button style={{marginTop: "15px", marginBottom: "15px", backgroundColor: "#ab47bc"}} id="duolingo" onClick={this.onMainBarClick} variant="contained">Duolingo</Button>
					<Button style={{marginTop: "15px", marginBottom: "15px", backgroundColor: "#ab47bc"}} id="cheatSheet" onClick={this.onMainBarClick} variant="contained">Grammar Cheat Sheet</Button>
					<TextField style={{marginTop: "15px"}} id="conjugatedWord" label="Word to Conjugate" variant="outlined" />
					<Button style={{backgroundColor: "#ab47bc"}} onClick={this.ConjugateWord} variant="contained">Conjugate</Button>
				</div>
		);
	}
}

export default MainBar;
