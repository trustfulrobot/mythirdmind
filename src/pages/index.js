import React, { useState} from "react";
import { graphql } from "gatsby";
import { stripTags, slice, words } from "voca";
import { Chance } from "chance";
// import he from "he";

export const feedPatrickMorrissey = graphql`
	{
		allFeedPatrickMorrissey(limit: 25) {
	    edges {
	      node {
	      	content {
	      		encoded
	      	}
	        id
	        link
	        title
	      }
	    }
	  },

		allFeedKentuckyTheater(limit: 25) {
	    edges {
	      node {
	        content {
	          encoded
	        }
	        id
	        link
	        title
	      }
	    }
	  },

		allFeedHighSnobiety(limit: 25) {
	    edges {
	      node {
	        content {
	          encoded
	        }
	        id
	        link
	        title
	      }
	    }
	  },

		allFeedAiWeirdness(limit: 25) {
	    edges {
	      node {
	        content
	        id
	        link
	        title
	      }
	    }
	  },

		allFeedCreativeApplications(limit: 25) {
	    edges {
	      node {
	        content
	        id
	        link
	        title
	      }
	    }
	  },

		allFeedEntagma(limit: 25) {
	    edges {
	      node {
	        content
	        id
	        link
	        title
	      }
	    }
	  },

		allFeedPitchfork(limit: 25) {
	    edges {
	      node {
	        content
	        id
	        link
	        title
	      }
	    }
	  },

		allFeedStereogum(limit: 25) {
	    edges {
	      node {
	        content {
	        	encoded
	        }
	        id
	        link
	        title
	      }
	    }
	  },

		allFeedArsTechnica(limit: 25) {
	    edges {
	      node {
	        content {
	          encoded
	        }
	        id
	        link
	        title
	      }
	    }
	  },

		allFeedTechCrunch(limit: 25) {
	    edges {
	      node {
	        content {
	          encoded
	        }
	        id
	        link
	        title
	      }
	    }
	  },

		allFeedCoLabs(limit: 25) {
	    edges {
	      node {
	        content
	        id
	        link
	        title
	      }
	    }
	  },

		allFeedCodrops(limit: 25) {
	    edges {
	      node {
	        content {
	          encoded
	        }
	        id
	        link
	        title
	      }
	    }
	  },

		allFeedCssTricks(limit: 25) {
	    edges {
	      node {
	        content {
	          encoded
	        }
	        id
	        link
	        title
	      }
	    }
	  }
	}
`

function decodeHTML(str) {
	return str.replace(/&#(\d+);/g, function(match, dec) {
    return String.fromCharCode(dec);
  });
}

function IndexPage({ data }) {

	const [count, setCount] = useState(500);

	const chance = new Chance();
	let sources = [];

	const source_PatrickMorrissey = data.allFeedPatrickMorrissey.edges.map(function(post, index){
		const sourceID = post.node.id;
		const sourceTitle = stripTags(post.node.title);
		const sourceLink = post.node.link;
		// const sourceContent = stripTags(post.node.content.encoded);
		const sourceContent = post.node.content.encoded;
		// const sourceContentDecoded = he.decode(sourceContent);
		const sourceContentDecoded = sourceContent;
		return {
			id: sourceID,
			source: "Patrick Morrissey",
			title: sourceTitle,
			content: sourceContentDecoded,
			link: sourceLink
		}
	});
	const source_KentuckyTheater = data.allFeedKentuckyTheater.edges.map(function(post, index){
		const sourceID = post.node.id;
		const sourceTitle = stripTags(post.node.title);
		const sourceLink = post.node.link;
		// const sourceContent = stripTags(post.node.content.encoded);
		const sourceContent = post.node.content.encoded;
		// const sourceContentDecoded = he.decode(sourceContent);
		const sourceContentDecoded = sourceContent;
		return {
			id: sourceID,
			source: "Kentucky Theater",
			title: sourceTitle,
			content: sourceContentDecoded,
			link: sourceLink
		}
	});
	const source_HighSnobiety = data.allFeedHighSnobiety.edges.map(function(post, index){
		const sourceID = post.node.id;
		const sourceTitle = stripTags(post.node.title);
		const sourceLink = post.node.link;
		// const sourceContent = stripTags(post.node.content.encoded);
		const sourceContent = post.node.content.encoded;
		// const sourceContentDecoded = he.decode(sourceContent);
		const sourceContentDecoded = sourceContent;
		return {
			id: sourceID,
			source: "High Snobiety",
			title: sourceTitle,
			content: sourceContentDecoded,
			link: sourceLink
		}
	});
	const source_AiWeirdness = data.allFeedAiWeirdness.edges.map(function(post, index){
		const sourceID = post.node.id;
		const sourceTitle = stripTags(post.node.title);
		const sourceLink = post.node.link;
		// const sourceContent = stripTags(post.node.content);
		const sourceContent = post.node.content;
		// const sourceContentDecoded = he.decode(sourceContent);
		const sourceContentDecoded = sourceContent;
		return {
			id: sourceID,
			source: "AI Weirdness",
			title: sourceTitle,
			content: sourceContentDecoded,
			link: sourceLink
		}
	});
	const source_CreativeApplications = data.allFeedCreativeApplications.edges.map(function(post, index){
		const sourceID = post.node.id;
		const sourceTitle = stripTags(post.node.title);
		const sourceLink = post.node.link;
		// const sourceContent = stripTags(post.node.content);
		const sourceContent = post.node.content;
		// const sourceContentDecoded = he.decode(sourceContent);
		const sourceContentDecoded = sourceContent;
		return {
			id: sourceID,
			source: "Creative Applications",
			title: sourceTitle,
			content: sourceContentDecoded,
			link: sourceLink
		}
	});
	const source_Pitchfork = data.allFeedPitchfork.edges.map(function(post, index){
		const sourceID = post.node.id;
		const sourceTitle = stripTags(post.node.title);
		const sourceLink = post.node.link;
		// const sourceContent = stripTags(post.node.content);
		const sourceContent = post.node.content;
		// const sourceContentDecoded = he.decode(sourceContent);
		const sourceContentDecoded = sourceContent;
		return {
			id: sourceID,
			source: "Pitchfork",
			title: sourceTitle,
			content: sourceContentDecoded,
			link: sourceLink
		}
	});
	const source_Stereogum = data.allFeedStereogum.edges.map(function(post, index){
		const sourceID = post.node.id;
		const sourceTitle = stripTags(post.node.title);
		const sourceLink = post.node.link;
		// const sourceContent = stripTags(post.node.content.encoded);
		const sourceContent = post.node.content.encoded;
		// const sourceContentDecoded = he.decode(sourceContent);
		const sourceContentDecoded = sourceContent;
		return {
			id: sourceID,
			source: "Stereogum",
			title: sourceTitle,
			content: sourceContentDecoded,
			link: sourceLink
		}
	});
	const source_ArsTechnica = data.allFeedArsTechnica.edges.map(function(post, index){
		const sourceID = post.node.id;
		const sourceTitle = stripTags(post.node.title);
		const sourceLink = post.node.link;
		// const sourceContent = stripTags(post.node.content.encoded);
		const sourceContent = post.node.content.encoded;
		// const sourceContentDecoded = he.decode(sourceContent);
		const sourceContentDecoded = sourceContent;
		return {
			id: sourceID,
			source: "Ars Technica",
			title: sourceTitle,
			content: sourceContentDecoded,
			link: sourceLink
		}
	});
	const source_TechCrunch = data.allFeedTechCrunch.edges.map(function(post, index){
		const sourceID = post.node.id;
		const sourceTitle = stripTags(post.node.title);
		const sourceLink = post.node.link;
		// const sourceContent = stripTags(post.node.content.encoded);
		const sourceContent = post.node.content.encoded;
		// const sourceContentDecoded = he.decode(sourceContent);
		const sourceContentDecoded = sourceContent;
		return {
			id: sourceID,
			source: "Tech Crunch",
			title: sourceTitle,
			content: sourceContentDecoded,
			link: sourceLink
		}
	});
	const source_CoLabs = data.allFeedCoLabs.edges.map(function(post, index){
		const sourceID = post.node.id;
		const sourceTitle = stripTags(post.node.title);
		const sourceLink = post.node.link;
		// const sourceContent = stripTags(post.node.content);
		const sourceContent = post.node.content;
		// const sourceContentDecoded = he.decode(sourceContent);
		const sourceContentDecoded = sourceContent;
		return {
			id: sourceID,
			source: "CoLabs",
			title: sourceTitle,
			content: sourceContentDecoded,
			link: sourceLink
		}
	});
	const source_Codrops = data.allFeedCodrops.edges.map(function(post, index){
		const sourceID = post.node.id;
		const sourceTitle = stripTags(post.node.title);
		const sourceLink = post.node.link;
		// const sourceContent = stripTags(post.node.content.encoded);
		const sourceContent = post.node.content.encoded;
		// const sourceContentDecoded = he.decode(sourceContent);
		const sourceContentDecoded = sourceContent;
		return {
			id: sourceID,
			source: "Codrops",
			title: sourceTitle,
			content: sourceContentDecoded,
			link: sourceLink
		}
	});
	const source_CSSTricks = data.allFeedCssTricks.edges.map(function(post, index){
		const sourceID = post.node.id;
		const sourceTitle = stripTags(post.node.title);
		const sourceLink = post.node.link;
		// const sourceContent = stripTags(post.node.content.encoded);
		const sourceContent = post.node.content.encoded;
		// const sourceContentDecoded = he.decode(sourceContent);
		const sourceContentDecoded = sourceContent;
		return {
			id: sourceID,
			source: "CSS Tricks",
			title: sourceTitle,
			content: sourceContentDecoded,
			link: sourceLink
		}
	});

	function addSource(source){
		sources.push(source);
	}
	Array.from(source_PatrickMorrissey).forEach(addSource);
	Array.from(source_KentuckyTheater).forEach(addSource);
	Array.from(source_HighSnobiety).forEach(addSource);
	Array.from(source_AiWeirdness).forEach(addSource);
	Array.from(source_CreativeApplications).forEach(addSource);
	Array.from(source_Pitchfork).forEach(addSource);
	Array.from(source_Stereogum).forEach(addSource);
	Array.from(source_ArsTechnica).forEach(addSource);
	Array.from(source_TechCrunch).forEach(addSource);
	Array.from(source_CoLabs).forEach(addSource);
	Array.from(source_Codrops).forEach(addSource);
	Array.from(source_CSSTricks).forEach(addSource);

	function pickSources(){
		const sourcesLen = sources.length;
		const sourcesNum = chance.integer({min: 3, max: 5});
		const sourceIDs = chance.unique(chance.integer, sourcesNum, {min: 0, max: sourcesLen - 1});
		return sourceIDs;
	}

	function generateCutups(num){
		let i = 0;
		const cutupLen = 180;
		while (i < num) {
			const sourceIDs = pickSources();
			const sourcesNum = sourceIDs.length;
			const fragmentLen	= Math.floor(cutupLen/sourcesNum);
			let cutupSources = [];
			let j = 0;
			while (j < sourcesNum) {
				let currentSource = sources[sourceIDs[j]];
				const currentSourceContent = currentSource.content;
				// make sure fragment will be long enough when truncated
				const currentSourceLen = currentSourceContent.length - fragmentLen;
				if (currentSourceLen > 0) {							
					const fragmentIndex = chance.integer({min: 0, max: currentSourceLen});
					let fragment = slice(currentSourceContent, fragmentIndex, fragmentIndex + fragmentLen);	
					// replace line breaks with a space
					// fragment = fragment.replace(/(\r\n|\n|\r)/gm," ");
					const fragmentWords = words(fragment);
					// remove first and last words bc they may be partial
					fragmentWords.shift();
					fragmentWords.pop();
					currentSource.content = fragmentWords.join(" ");	
					cutupSources.push(currentSource);
				}
				j++;
			}
			if (cutupSources.length > 2) {
				// let cutupDiv = document.createElement('li');
				let cutupContent = "";
				cutupSources.forEach(function(cutupSource){
					cutupContent = cutupContent + cutupSource.content + " ";
				})
				cutupContent = cutupContent.trim();
				console.log(cutupContent);
				// cutupDiv.innerHTML = cutupContent;
				// document.getElementById('cutups').appendChild(cutupDiv);
			}
			i++;
		}
	}
	generateCutups(10);

	return (
		<div id="MyThirdMind">
			<h1>My Third Mind</h1>
			<ul id="cutups"></ul>
		</div>
	)
}

export default IndexPage
