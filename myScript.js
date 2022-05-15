function myGame()
{
    var score = 0;
    var one = document.getElementById("one").value;
    var two = document.getElementById("two").value;
    var three = document.getElementById("three").value;
    var four = document.getElementById("four").value;
    var five = document.getElementById("five").value;
    var six = document.getElementById("six").value;
    var seven = document.getElementById("seven").value;
    var eight = document.getElementById("eight").value;
    var nine = document.getElementById("nine").value;

    
    if(one == 'X' &&  two == 'X' && three == 'X')
    {
        document.getElementById('hi').innerHTML = "Player 1 win";
        score = 1;
        document.getElementById("four").disabled = true;
        document.getElementById("five").disabled = true;
        document.getElementById("six").disabled = true;
        document.getElementById("seven").disabled = true;
        document.getElementById("eight").disabled = true;
        document.getElementById("nine").disabled = true;
    }
    else if(one == 'X' && four == 'X' && seven == 'X')
    {
        document.getElementById('hi').innerHTML = "Player 1 win";

        document.getElementById("two").disabled = true;
        document.getElementById("three").disabled = true;
        document.getElementById("five").disabled = true;
        document.getElementById("six").disabled = true;
        document.getElementById("eight").disabled = true;
        document.getElementById("nine").disabled = true;
    }
    else if(seven == 'X' && eight == 'X' && nine == 'X')
    {
        document.getElementById('hi').innerHTML = "Player 1 win";

        document.getElementById("one").disabled = true;
        document.getElementById("two").disabled = true;
        document.getElementById("three").disabled = true;
        document.getElementById("four").disabled = true;
        document.getElementById("five").disabled = true;
        document.getElementById("six").disabled = true;
    }
    else if(three == 'X' && six == 'X' && nine == 'X')
    {
        document.getElementById('hi').innerHTML = "Player 1 win";

        document.getElementById("one").disabled = true;
        document.getElementById("two").disabled = true;
        document.getElementById("four").disabled = true;
        document.getElementById("five").disabled = true;
        document.getElementById("seven").disabled = true;
        document.getElementById("eight").disabled = true;
    }
    else if(four == 'X' && five == 'X' && six == 'X')
    {
        document.getElementById('hi').innerHTML = "Player 1 win";

        document.getElementById("one").disabled = true;
        document.getElementById("two").disabled = true;
        document.getElementById("three").disabled = true;
        document.getElementById("seven").disabled = true;
        document.getElementById("eight").disabled = true;
        document.getElementById("nine").disabled = true;
    }
    else if(two == 'X' && five == 'X' && eight == 'X')
    {
        document.getElementById('hi').innerHTML = "Player 1 win";

        document.getElementById("one").disabled = true;        
        document.getElementById("three").disabled = true;
        document.getElementById("four").disabled = true;
        document.getElementById("six").disabled = true;
        document.getElementById("seven").disabled = true;
        document.getElementById("nine").disabled = true;
    }
    else if(one == 'X' && five == 'X' && nine == 'X')
    {
        document.getElementById('hi').innerHTML = "Player 1 win";

        document.getElementById("two").disabled = true;
        document.getElementById("three").disabled = true;
        document.getElementById("four").disabled = true;
        document.getElementById("six").disabled = true;
        document.getElementById("seven").disabled = true;
        document.getElementById("eight").disabled = true;
    }
    else if(three == 'X' && five == 'X' && seven == 'X')
    {
        document.getElementById('hi').innerHTML = "Player 1 win";

        document.getElementById("one").disabled = true;
        document.getElementById("two").disabled = true;
        document.getElementById("four").disabled = true;
        document.getElementById("six").disabled = true;
        document.getElementById("eight").disabled = true;
        document.getElementById("nine").disabled = true;
    }
    else if(one == 'O' &&  two == 'O' && three == 'O')
    {
        document.getElementById('hi').innerHTML = "Player 2 win";

        document.getElementById("four").disabled = true;
        document.getElementById("five").disabled = true;
        document.getElementById("six").disabled = true;
        document.getElementById("seven").disabled = true;
        document.getElementById("eight").disabled = true;
        document.getElementById("nine").disabled = true;
    }
    else if(one == 'O' && four == 'O' && seven == 'O')
    {
        document.getElementById('hi').innerHTML = "Player 2 win";

        document.getElementById("two").disabled = true;
        document.getElementById("three").disabled = true;
        document.getElementById("five").disabled = true;
        document.getElementById("six").disabled = true;
        document.getElementById("eight").disabled = true;
        document.getElementById("nine").disabled = true;
    }
    else if(seven == 'O' && eight == 'O' && nine == 'O')
    {
        document.getElementById('hi').innerHTML = "Player 2 win";

        document.getElementById("one").disabled = true;
        document.getElementById("two").disabled = true;
        document.getElementById("three").disabled = true;
        document.getElementById("four").disabled = true;
        document.getElementById("five").disabled = true;
        document.getElementById("six").disabled = true;
    }
    else if(three == 'O' && six == 'O' && nine == 'O')
    {
        document.getElementById('hi').innerHTML = "Player 2 win";

        document.getElementById("one").disabled = true;
        document.getElementById("two").disabled = true;
        document.getElementById("four").disabled = true;
        document.getElementById("five").disabled = true;
        document.getElementById("seven").disabled = true;
        document.getElementById("eight").disabled = true;
    }
    else if(four == 'O' && five == 'O' && six == 'O')
    {
        document.getElementById('hi').innerHTML = "Player 2 win";

        document.getElementById("one").disabled = true;
        document.getElementById("two").disabled = true;
        document.getElementById("three").disabled = true;
        document.getElementById("seven").disabled = true;
        document.getElementById("eight").disabled = true;
        document.getElementById("nine").disabled = true;
    }
    else if(two == 'O' && five == 'O' && eight == 'O')
    {
        document.getElementById('hi').innerHTML = "Player 2 win";

        document.getElementById("one").disabled = true;        
        document.getElementById("three").disabled = true;
        document.getElementById("four").disabled = true;
        document.getElementById("six").disabled = true;
        document.getElementById("seven").disabled = true;
        document.getElementById("nine").disabled = true;
    }
    else if(one == 'O' && five == 'O' && nine == 'O')
    {
        document.getElementById('hi').innerHTML = "Player 2 win";

        document.getElementById("two").disabled = true;
        document.getElementById("three").disabled = true;
        document.getElementById("four").disabled = true;
        document.getElementById("six").disabled = true;
        document.getElementById("seven").disabled = true;
        document.getElementById("eight").disabled = true;
    }
    else if(three == 'O' && five == 'O' && seven == 'O')
    {
        document.getElementById('hi').innerHTML = "Player 2 win";

        document.getElementById("one").disabled = true;
        document.getElementById("two").disabled = true;
        document.getElementById("four").disabled = true;
        document.getElementById("six").disabled = true;
        document.getElementById("eight").disabled = true;
        document.getElementById("nine").disabled = true;
    }
    else if((one == 'X' || one == 'O') && (two == 'X' || two == 'O') 
    && (three == 'X' || three == 'O') && (four == 'X' || four == 'O')
    && (five == 'X' || five == 'O') && (six == 'X' || six == 'O')
    && (seven == 'X' || seven == 'O') && (eight == 'X' || eight == 'O')
    && (nine == 'X' || nine == 'O'))
    {
        document.getElementById('hi').innerHTML = "Game Tie";
        score = 0
    }
    return score;
}

function Score()
{
    var point = myGame();
    var Player1 = 0;
    var Player2 = 0;
    var tie = 0;
    if(point == 1)
    {
        Player1 += 1;
    }
    if(point = 2)
    {
        Player2 += 1;
    }
    if(point = 0)
    {
        tie += 1;
    }

    document.getElementById('Point1').innerHTML = Player1;
    document.getElementById('Tie').innerHTML = tie;
    document.getElementById('Point2').innerHTML = Player2;

    
}

count = 1;
function myXorO(myID)
{
    if(count == 1)
    {
        document.getElementById(myID).value = "X";
        document.getElementById(myID).disabled = true;
        count = 0;
    }
    else
    {
        document.getElementById(myID).value = "O";
        document.getElementById(myID).disabled = true;
        count = 1;
    }
}

function Clear()
{
    window.location.reload();
}