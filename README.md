# Hackathon - Back to the future

> This is an web application that was coded using React during a 48 hours hackathon in web developer Bootcamp by four students.\
It's an app that provides information for a buy/sell trading system based on barter...in the middle ages...

[View demo](https://relaxed-montalcini-9c04b3.netlify.app/)

<br/>

## Table of contents
* [About the app](#about-the-app)
    * [Hackathon challenge](#challenge)
    * [Mockup](#mockup)
    * [General info](#general-info)
    * [Features](#features)
    * [About the code](#about-the-code)
    * [Contact](#contact)
* [Some history](#some-history)
    * [Journey](#journey)
    * [Idea](#idea)

# About the app

## Hackathon challenge

*Wilders have the power to travel back in time and bring all their technology with them. They can explore the period of their choice in order to create an application that can be perfectly adapted to the needs of the times.*

## Mockup
![Fairtrade App](./img/app.jpg)

## General info

We created an App to make barter in the Middle Ages fair and easy. The App is accessible for everyone.

You choose the product and amount you want to exchange, then you pick the product you want. The app will show you the possible trade, which may be a fair, winning or, a losing trade.

For example, your loaf of bread may be worth exactly *12.256* eggs, but because you can't split an egg, you will get only 12. That would be a losing trade.

Because the offer and demand of the different products are constantly fluctuating, you have the option to fetch the latest barter information. This may work against you, so use it sparingly, be smart and watch the market!

## Features
* Get best deals for your items, space-monkeys and sexy-farmers
* Integrated price fluctuation
* Simple UX/UI for the average user in the middle ages.

To-do list (48 hours were not enough to code everything):
* Arrows will turn into different colors, depending on how good your trade is.
* Integrate a graph showing the fluctuation.
* More descriptive text explaint 
* More descriptive text explaining the "fairness" of the trade and an option to see the "exact" equal trade without rounding.
* Code an algorithm that will attempt to make a trade fair by changing the number of products being traded.

## About the code

To build this application we used React (with hooks) and React Router.

In the hackathon we had one requirement: we had to use a public API. We tried first to pull the images of the products from an API but we failed to find a good one.

We were thinking of simulating the trading ratios with simple Javascript but a better idea was to use a trading API as the source of those ratios.

We ended up using [ExchangeRate Api](https://v6.exchangerate-api.com), which is an API that provides currency conversion rates for 160 currencies. We simply asigned them to the different products. For instance, eggs are american dollars and corn are swiss francs.


## Contact us
Created by [Victoria](https://www.linkedin.com/in/viktoria-kulinkovich-280167202/), [Carlos](https://www.linkedin.com/in/carlosaore/), [Yury](https://www.linkedin.com/in/yuryiva/) and [Nadine](https://www.linkedin.com/in/nadinestrobel/).

# Some history

## Journey
We must have got kidnapped.
I can’t remember anything except from waking up somewhere, we had never been before.
It was a very crowded place.
It was noisy and smelly, there was people, animals and stuff everywhere.

**** 

We obviously travelled back in time -to the Middle Ages.
We found ourselves in the middle of a market.
How is that possible?

****

We had no idea how we got here,
and still less, how we should travel back.
So we decided to find something to eat and a place to stay until we found out how to travel back to the future.

****

We are walking over the market.
It is wild trading all over the place.
Next to us, an old women is buying a chicken.
It’s head ist just cut off with an axe blood all over the place.
That’s not what we prefer to have for lunch today.

****

We go on until we find this guy selling bread.
It looks like the best option for us.
But how should we pay?

Do you think he’s gonna accept ApplePay?
We brought nothing with us - except from our smartphones.

****

How do those people buy stuff without a smartphone?

We find a man, Robin, who is willing to explain the trading principles to us.

There is nothing like a currency.
Everything is about barter, that means:
Bring something to the market and change it for whatever you need.
Maybe bring more of whatever you have since you never know what you will get in exchange today.

#### And for sure, watch out to not to get pulled over the barrel!

That is daily business

And it’s many people who already lost a lot by getting tricked.

…

We are leaving the market to think about what Robin told us.

#### I think we can solve this issue and bring fairness into this world!

## Idea

There should be exchange rates, being accessible for everyone.

Everyone should be able to know at every time, what he could get in exchange, for what he wants to trade.






