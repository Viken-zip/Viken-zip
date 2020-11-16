#include <iostream> 
#include <string>
#include <stdlib.h>

using std::cout;
using std::endl;
using std::cin;
using std::string;
using namespace std;

int main()
{
    int a = 0;
    string name = "";
    string before = "";
    bool no = false;

    cout << "\x1b[36m################\n";
    cout << "#lyfe simulator#\n";
    cout << "##############V1 \x1b[0m \n";
    cout << "\n";
    cout << "\x1b[32mwhats youre name? \x1b[0m \n";

    cin >> name;

    cout << "\n";
    cout << "\x1b[36mhi, " << name << "? nice! \x1b[0m \n";
    cout << "\n";

    before:

    cout << "\x1b[32mhave you play this game before? \x1b[0m \n";

    cin >> before;

    if (before == "no"){

        cout << "\n";
        cout << "\x1b[36mok let me explain how this work, so youre living in a okay house in middle of finland and you need to do some work to get cash and with cash you can buy food, drinks, cars, houses. and you need to sleep, eat, drink and work to survive you never age so you can just grind and there is no saves, the game name instant_lyfe is from that this game has no time or waiting in it. and you need to hold an eye on youre stats and aqua colord texts means its just readable text and might hold info you want to know, green text is a question you need to answear to continue the game and [] means what the action/thing takes/costs. thats was it, Have fun! \x1b[0m \n";
        cout << "\n";
        cout << "write anythin to and press enter to continue\n";
        cin >> a;
        cout << "\n";

    } else if (before == "yes"){

        cout << "ok then you probably know how and what to do\n";
        cout << "\n";

    } else {

        cout << "thats not an option, youre options are yes or no\n";
        cout << "\n";
        goto before;
    }
    
    cout << "\x1b[36m you can go to .work. .gasstation. .shop. .cardealership. .bank. you can also check .stats.\n";
    cout << "\x1b[32youre at home, what do you wana do? \x1b[0m \n";

    cout << "-------stats--------\n";
    cout << "hunger  [#########_]\n";
    cout << "thirst  [#########_]\n";
    cout << "fatigue [##+_______]\n";
    cout << "money=100€ bank=250€\n";
    cout << "--------car---------\n";
    cout << "toyota avensis 1,6L \n";
    cout << "gas [##############]\n";
    cout << "--------------------\n";

    cout << "######################################################################################\n";
    cout << "#                                                                                    #\n";
    cout << "#                            ,.--------._                                            #\n";
    cout << "#                           /            ''.                                         #\n";
    cout << "#                         ,'                \\     |'\\                /\\          /\\  #\n";
    cout << "#                /'|     /                   \\    |__'              ( \\        // )  #\n";
    cout << "#               '_'|    /           z#####z   \\  //                  \\ \\      // /   #\n";
    cout << "#                 \\  #####        ##------'.  \\//                    \\_\\||||//_/     #\n";
    cout << "#                  \\/-----\\     /          '.  \\                      \\/ _  _ \\      #\n";
    cout << "#                   \\|      \\   |   ,,--..       \\                    \\/|(O)(O)|     #\n";
    cout << "#                   | ,.--._ \\  (  | ##   \\)      \\                  \\/ |      |     #\n";
    cout << "#                   |(  ##  )/   \\ `-....-//       |///////////////_\\/  \\      /     #\n";
    cout << "#                     '--'.'      \\                \\              //     |____|      #\n";
    cout << "#                  /'    /         ) --.            \\            ||     /      \\     #\n";
    cout << "#               ,..|     \\.________/    `-..         \\   \\       \\|     \\ 0  0 /     #\n";
    cout << "#            _,##/ |   ,/   /   \\           \\         \\   \\       U    / \\_//_/      #\n";
    cout << "#          :###.-  |  ,/   /     \\        /' ""\\      .\\        (     /                #\n";
    cout << "#         /####|   |   (.___________,---',/    |       |\\=._____|  |_/               #\n";
    cout << "#        /#####|   |     \\__|__|__|__|_,/             |####\\    |  ||                #\n";
    cout << "#       /######\\   \\      \\__________/                /#####|   \\  ||                #\n";
    cout << "#      /|#######`. `\\                                /#######\\   | ||                #\n";
    cout << "#     /++\\#########\\  \\                      _,'    _/#########\\ | ||                #\n";
    cout << "#    /++++|#########|  \\      .---..       ,/      ,'##########.\\|_||  Donkey By     #\n";
    cout << "#   //++++|#########\\.  \\.              ,-/      ,'########,+++++\\_\\ Hard'96         #\n";
    cout << "#  /++++++|##########\\.   '._        _,/       ,'######,''++++++++\\                  #\n";
    cout << "# |+++++++|###########|       -----.'        _'#######' +++++++++++\\                 #\n";
    cout << "# |+++++++|############\\.     \\     //      /#######/++++ S@yaN +++\\                 #\n";
    cout << "#      ________________________\\___//______________________________________          #\n";
    cout << "#     / ____________________________________________________________________)        #\n";
    cout << "#    / /              _                                             _                #\n";
    cout << "#    | |             | |                                           | |               #\n";
    cout << "#     \\ \\            | | _           ____           ____           | |  _            #\n";
    cout << "#      \\ \\           | || \\         / ___)         / _  )          | | / )           #\n";
    cout << "#  _____) )          | | | |        | |           (  __ /          | |< (            #\n";
    cout << "# (______/           |_| |_|        |_|            \\_____)         |_| \\_)           #\n";
    cout << "#                                                                           19.08.02 #\n";
    cout << "######################################################################################\n";
}