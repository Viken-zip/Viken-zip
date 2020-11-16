#include <iostream> 

using std::cout;
using std::endl;
using std::cin;

int main()                             
{
    int anyelseval;
    int anyelse;
    int sub = 0;
    int pizzasubans;
    int pizzasub;
    int pizza = 5;

    cout << "###########################\n";
    cout << "#                         #\n";
    cout << "#  pizza order simulator  #\n";
    cout << "#                         #\n";
    cout << "###########################\n";
    cout << "how many pizza do yo want?\n";

    cin >> pizza;

    cout << "ok what type of pizza do you want?\n";
    cout << "[1] peperoni (10€)\n";
    cout << "[2] cheese (9€)\n";
    cout << "[3] tropic (11€)\n";
    cout << "[4] cupcake pizza (15€)\n";

    cin >> pizzasub;

    if (pizzasub == 1) {
        pizzasubans = 10 * pizza;
        cout << "thats " << pizzasubans << "€\n";
    } else if(pizzasub == 2) {
        pizzasubans = 9 * pizza;
        cout << "thats " << pizzasubans << "€\n";
    } else if(pizzasub == 3) {
        pizzasubans = 11 * pizza;
        cout << "thats " << pizzasubans << "€\n";
    } else if(pizzasub == 4) {
        pizzasubans = 15 * pizza;
        cout << "thats " << pizzasubans << "€\n";
    } else {
        cout << "F off\n";
    }
    cout << "anything else?\n";
    cout << "[1] yes\n";
    cout << "[2] no\n";
    cin >> anyelse;
    if (anyelse == 1) {
        cout << "okay, so what do you want?\n";
        cout << "[1] cheap yellow plastic toy (2€)\n";
        cout << "[2] unknown used paper (1€)\n";
        cout << "[3] 0,25L coca-cola (2€)\n";
        cout << "[4] 0,45L coca-cola (3€)\n";
        cout << "[5] 0,75L coca-cola (4€)\n";
        cout << "[6] some GOT DAMN soy milk (3€)\n";
        cout << "[7] a glass of watta (1€)\n";
        cout << "[8] funny, boring painting (10€)\n";
        cout << "[9] a banana fresh (2€)\n";
        cout << "[0] dehydrated water (5€)\n";
        cout << "[10] never mind\n";
        cin >> anyelseval;
        if (anyelseval == 1) {
            sub = 5;
        } else if (anyelseval == 2) {
            sub = 1;
        } else if (anyelseval == 3) {
            sub = 2;
        } else if (anyelseval == 4) {
            sub = 3;
        } else if (anyelseval == 5) {
            sub = 4;
        } else if (anyelseval == 6) {
            sub = 3;
        } else if (anyelseval == 7) {
            sub = 1;
        } else if (anyelseval == 8) {
            sub = 10;
        } else if (anyelseval == 9) {
            sub = 2;
        } else if (anyelseval == 0) {
            sub = 5;
        } else if (anyelseval == 10){

        } else if (anyelseval >= 11){
            cout << "F off\n";
        }
        cout << "okay that will be " << pizzasubans + sub << "€\n";
    } else if (anyelse == 2) {
        cout << "ok that will be " << pizzasubans << "€\n";
    } else {
        cout << "F off willya!!?\n";
    }
}