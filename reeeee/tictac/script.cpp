#include <iostream> 
#include <string>

using std::cout;
using std::endl;
using std::cin;
using std::string;

int main() 
{
    string no = " ";
    string tw = " ";
    string tr = " ";
    string fo = " ";
    string fi = " ";
    string si = " ";
    string se = " ";
    string ei = " ";
    string ni = " ";

    int side;
    int mem1;
    int mem2;
    int mem3;
    int mem4;
    int mem5;
    int mem6;
    int mem7;
    int mem8;
    int mem9;

    cout << "##################\n";
    cout << "#                #\n";
    cout << "#  tic tac toe!  #\n";
    cout << "#                #\n";
    cout << "##################\n";
    cout << "------------------\n";
    cout << "player 1s turn\n";
    cout << "[" << no <<"][" << tw << "][" << tr << "] 1 2 3\n";
    cout << "[" << fo << "][" << fi << "][" << si << "] 4 5 6\n";
    cout << "[" << se << "][" << ei << "][" << ni << "] 7 8 9\n";

    cin >> mem1;
    if (mem1 == 1){
        no = "O";
    } else if (mem1 == 2) {
        tw = "O";
    }
     else if (mem1 == 3) {
        tr = "O";
    }
     else if (mem1 == 4) {
        fo = "O";
    }
     else if (mem1 == 5) {
        fi = "O";
    }
     else if (mem1 == 6) {
        si = "O";
    }
     else if (mem1 == 7) {
        se = "O";
    }
     else if (mem1 == 8) {
        ei = "O";
    }
     else if (mem1 == 9) {
        ni = "O";
    }

    cout << "player 2s turn\n";
    cout << "[" << no <<"][" << tw << "][" << tr << "] 1 2 3\n";
    cout << "[" << fo << "][" << fi << "][" << si << "] 4 5 6\n";
    cout << "[" << se << "][" << ei << "][" << ni << "] 7 8 9\n";

    start1:

    cin >> mem2;

    if (mem2 == 1) {
        
        if (no == " "){
        no = "X";
        } else {
            cout << "that position is already occupied!\n";
            goto start1;
        }
        
    } else if (mem2 == 2) {
        
        if (tw == " "){
        tw = "X";
        } else {
            cout << "that position is already occupied!\n";
            goto start1;
        }

    } else if (mem2 == 3) {

        if (tr == " "){
        tr = "X";
        } else {
            cout << "that position is already occupied!\n";
            goto start1;
        }

    } else if (mem2 == 4) {
        
        if (fo == " "){
        fo = "X";
        } else {
            cout << "that position is already occupied!\n";
            goto start1;
        }
        
    } else if (mem2 == 5) {
        
        if (fi == " "){
        fi = "X";
        } else {
            cout << "that position is already occupied!\n";
            goto start1;
        }
        
    } else if (mem2 == 6) {
        
        if (si == " "){
        si = "X";
        } else {
            cout << "that position is already occupied!\n";
            goto start1;
        }
        
    } else if (mem2 == 7) {
        
        if (se == " "){
        se = "X";
        } else {
            cout << "that position is already occupied!\n";
            goto start1;
        }
        
    } else if (mem2 == 8) {
        
        if (ei == " "){
        ei = "X";
        } else {
            cout << "that position is already occupied!\n";
            goto start1;
        }
        
    } else if (mem2 == 9) {
        
        if (ni == " "){
        ni = "X";
        } else {
            cout << "that position is already occupied!\n";
            goto start1;
        }
    }

    cout << "player 1s turn\n";
    cout << "[" << no <<"][" << tw << "][" << tr << "] 1 2 3\n";
    cout << "[" << fo << "][" << fi << "][" << si << "] 4 5 6\n";
    cout << "[" << se << "][" << ei << "][" << ni << "] 7 8 9\n";

    start2:

    cin >> mem3;

    if (mem3 == 1){

        if (no == " "){
        no = "O";
        } else {
            cout << "that position is already occupied!\n";
            goto start2;
        }

    } else if (mem3 == 2) {
        
        if (tw == " "){
        tw = "O";
        } else {
            cout << "that position is already occupied!\n";
            goto start2;
        }

    }
     else if (mem3 == 3) {
        
        if (tr == " "){
        tr = "O";
        } else {
            cout << "that position is already occupied!\n";
            goto start2;
        }

    }
     else if (mem3 == 4) {
        
        if (fo == " "){
        fo = "O";
        } else {
            cout << "that position is already occupied!\n";
            goto start2;
        }

    }
     else if (mem3 == 5) {
        
        if (fi == " "){
        fi = "O";
        } else {
            cout << "that position is already occupied!\n";
            goto start2;
        }

    }
     else if (mem3 == 6) {
        
        if (si == " "){
        si = "O";
        } else {
            cout << "that position is already occupied!\n";
            goto start2;
        }

    }
     else if (mem3 == 7) {
        
        if (se == " "){
        se = "O";
        } else {
            cout << "that position is already occupied!\n";
            goto start2;
        }

    }
     else if (mem3 == 8) {
        
        if (ei == " "){
        ei = "O";
        } else {
            cout << "that position is already occupied!\n";
            goto start2;
        }

    }
     else if (mem3 == 9) {
        
        if (ni == " "){
        ni = "O";
        } else {
            cout << "that position is already occupied!\n";
            goto start2;
        }

    }

    cout << "player 2s turn\n";
    cout << "[" << no <<"][" << tw << "][" << tr << "] 1 2 3\n";
    cout << "[" << fo << "][" << fi << "][" << si << "] 4 5 6\n";
    cout << "[" << se << "][" << ei << "][" << ni << "] 7 8 9\n";

    start3:

    cin >> mem4;

    if (mem4 == 1) {

        if (no == " "){
        no = "X";
        } else {
            cout << "that position is already occupied!\n";
            goto start3;
        }

    } else if (mem4 == 2) {
        
        if (tw == " "){
        tw = "X";
        } else {
            cout << "that position is already occupied!\n";
            goto start3;
        }

    } else if (mem4 == 3) {
        
        if (tr == " "){
        tr = "X";
        } else {
            cout << "that position is already occupied!\n";
            goto start3;
        }

    } else if (mem4 == 4) {
        
        if (fo == " "){
        fo = "X";
        } else {
            cout << "that position is already occupied!\n";
            goto start3;
        }

    } else if (mem4 == 5) {
        
        if (fi == " "){
        fi = "X";
        } else {
            cout << "that position is already occupied!\n";
            goto start3;
        }

    } else if (mem4 == 6) {
        
        if (si == " "){
        si = "X";
        } else {
            cout << "that position is already occupied!\n";
            goto start3;
        }

    } else if (mem4 == 7) {
        
        if (se == " "){
        se = "X";
        } else {
            cout << "that position is already occupied!\n";
            goto start3;
        }

    } else if (mem4 == 8) {
        
        if (ei == " "){
        ei = "X";
        } else {
            cout << "that position is already occupied!\n";
            goto start3;
        }

    } else if (mem4 == 9) {
        
        if (ni == " "){
        ni = "X";
        } else {
            cout << "that position is already occupied!\n";
            goto start3;
        }

    }

    cout << "player 1s turn\n";
    cout << "[" << no <<"][" << tw << "][" << tr << "] 1 2 3\n";
    cout << "[" << fo << "][" << fi << "][" << si << "] 4 5 6\n";
    cout << "[" << se << "][" << ei << "][" << ni << "] 7 8 9\n";
    
    start4:

    cin >> mem5;

    if (mem5 == 1){

        if (no == " "){
        no = "O";
        } else {
            cout << "that position is already occupied!\n";
            goto start4;
        }

    } else if (mem5 == 2) {
        
        if (tw == " "){
        tw = "O";
        } else {
            cout << "that position is already occupied!\n";
            goto start4;
        }

    }
     else if (mem5 == 3) {
        
        if (tr == " "){
        tr = "O";
        } else {
            cout << "that position is already occupied!\n";
            goto start4;
        }

    }
     else if (mem5 == 4) {
        
        if (fo == " "){
        fo = "O";
        } else {
            cout << "that position is already occupied!\n";
            goto start4;
        }

    }
     else if (mem5 == 5) {
        
        if (fi == " "){
        fi = "O";
        } else {
            cout << "that position is already occupied!\n";
            goto start4;
        }

    }
     else if (mem5 == 6) {
        
        if (si == " "){
        si = "O";
        } else {
            cout << "that position is already occupied!\n";
            goto start4;
        }

    }
     else if (mem5 == 7) {
        
        if (se == " "){
        se = "O";
        } else {
            cout << "that position is already occupied!\n";
            goto start4;
        }

    }
     else if (mem5 == 8) {
        
        if (ei == " "){
        ei = "O";
        } else {
            cout << "that position is already occupied!\n";
            goto start4;
        }

    }
     else if (mem5 == 9) {
        
        if (ni == " "){
        ni = "O";
        } else {
            cout << "that position is already occupied!\n";
            goto start4;
        }

    }

    cout << "player 2s turn\n";
    cout << "[" << no <<"][" << tw << "][" << tr << "] 1 2 3\n";
    cout << "[" << fo << "][" << fi << "][" << si << "] 4 5 6\n";
    cout << "[" << se << "][" << ei << "][" << ni << "] 7 8 9\n";

    start5:

    cin >> mem6;

    if (mem6 == 1) {

        if (no == " "){
        no = "X";
        } else {
            cout << "that position is already occupied!\n";
            goto start5;
        }

    } else if (mem6 == 2) {
        
        if (tw == " "){
        tw = "X";
        } else {
            cout << "that position is already occupied!\n";
            goto start5;
        }

    } else if (mem6 == 3) {
        
        if (tr == " "){
        tr = "X";
        } else {
            cout << "that position is already occupied!\n";
            goto start5;
        }

    } else if (mem6 == 4) {
        
        if (fo == " "){
        fo = "X";
        } else {
            cout << "that position is already occupied!\n";
            goto start5;
        }

    } else if (mem6 == 5) {
        
        if (fi == " "){
        fi = "X";
        } else {
            cout << "that position is already occupied!\n";
            goto start5;
        }

    } else if (mem6 == 6) {
        
        if (si == " "){
        si = "X";
        } else {
            cout << "that position is already occupied!\n";
            goto start5;
        }

    } else if (mem6 == 7) {
        
        if (se == " "){
        se = "X";
        } else {
            cout << "that position is already occupied!\n";
            goto start5;
        }

    } else if (mem6 == 8) {
        
        if (ei == " "){
        ei = "X";
        } else {
            cout << "that position is already occupied!\n";
            goto start5;
        }

    } else if (mem6 == 9) {
        
        if (ni == " "){
        ni = "X";
        } else {
            cout << "that position is already occupied!\n";
            goto start5;
        }

    }

    cout << "player 1s turn\n";
    cout << "[" << no <<"][" << tw << "][" << tr << "] 1 2 3\n";
    cout << "[" << fo << "][" << fi << "][" << si << "] 4 5 6\n";
    cout << "[" << se << "][" << ei << "][" << ni << "] 7 8 9\n";

    start6:

    cin >> mem7;

    if (mem7 == 1){

        if (no == " "){
        no = "O";
        } else {
            cout << "that position is already occupied!\n";
            goto start6;
        }

    } else if (mem7 == 2) {
          
        if (tw == " "){
        tw = "O";
        } else {
            cout << "that position is already occupied!\n";
            goto start6;
        }

    }
     else if (mem7 == 3) {
          
        if (tr == " "){
        tr = "O";
        } else {
            cout << "that position is already occupied!\n";
            goto start6;
        }

    }
     else if (mem7 == 4) {
          
        if (fo == " "){
        fo = "O";
        } else {
            cout << "that position is already occupied!\n";
            goto start6;
        }

    }
     else if (mem7 == 5) {
          
        if (fi == " "){
        fi = "O";
        } else {
            cout << "that position is already occupied!\n";
            goto start6;
        }

    }
     else if (mem7 == 6) {
          
        if (si == " "){
        si = "O";
        } else {
            cout << "that position is already occupied!\n";
            goto start6;
        }

    }
     else if (mem7 == 7) {
          
        if (se == " "){
        se = "O";
        } else {
            cout << "that position is already occupied!\n";
            goto start6;
        }

    }
     else if (mem7 == 8) {
          
        if (ei == " "){
        ei = "O";
        } else {
            cout << "that position is already occupied!\n";
            goto start6;
        }

    }
     else if (mem7 == 9) {
          
        if (ni == " "){
        ni = "O";
        } else {
            cout << "that position is already occupied!\n";
            goto start6;
        }

    }

    cout << "player 2s turn\n";
    cout << "[" << no <<"][" << tw << "][" << tr << "] 1 2 3\n";
    cout << "[" << fo << "][" << fi << "][" << si << "] 4 5 6\n";
    cout << "[" << se << "][" << ei << "][" << ni << "] 7 8 9\n";

    start7:

    cin >> mem8;

    if (mem8 == 1) {

        if (no == " "){
        no = "X";
        } else {
            cout << "that position is already occupied!\n";
            goto start7;
        }

    } else if (mem8 == 2) {
        
        if (tw == " "){
        tw = "X";
        } else {
            cout << "that position is already occupied!\n";
            goto start7;
        }
        
    } else if (mem8 == 3) {
        
        if (tr == " "){
        tr = "X";
        } else {
            cout << "that position is already occupied!\n";
            goto start7;
        }
        
    } else if (mem8 == 4) {
        
        if (fo == " "){
        fo = "X";
        } else {
            cout << "that position is already occupied!\n";
            goto start7;
        }
        
    } else if (mem8 == 5) {
        
        if (fi == " "){
        fi = "X";
        } else {
            cout << "that position is already occupied!\n";
            goto start7;
        }
        
    } else if (mem8 == 6) {
        
        if (si == " "){
        si = "X";
        } else {
            cout << "that position is already occupied!\n";
            goto start7;
        }
        
    } else if (mem8 == 7) {
        
        if (se == " "){
        se = "X";
        } else {
            cout << "that position is already occupied!\n";
            goto start7;
        }
        
    } else if (mem8 == 8) {
        
        if (ei == " "){
        ei = "X";
        } else {
            cout << "that position is already occupied!\n";
            goto start7;
        }
        
    } else if (mem8 == 9) {
        
        if (ni == " "){
        ni = "X";
        } else {
            cout << "that position is already occupied!\n";
            goto start7;
        }
        
    }

    cout << "player 1s turn\n";
    cout << "[" << no <<"][" << tw << "][" << tr << "] 1 2 3\n";
    cout << "[" << fo << "][" << fi << "][" << si << "] 4 5 6\n";
    cout << "[" << se << "][" << ei << "][" << ni << "] 7 8 9\n";

    start8:

    cin >> mem9;

    if (mem9 == 1){

        if(no == " "){
        no = "O";
        } else {
            cout << "that position is already occupied!\n";
            goto start8;
        }
        
    } else if (mem9 == 2) {
        
        if(tw == " "){
        tw = "O";
        } else {
            cout << "that position is already occupied!\n";
            goto start8;
        }
        
    }
     else if (mem9 == 3) {
        
        if(tr == " "){
        tr = "O";
        } else {
            cout << "that position is already occupied!\n";
            goto start8;
        }
        
    }
     else if (mem9 == 4) {
        
        if(fo == " "){
        fo = "O";
        } else {
            cout << "that position is already occupied!\n";
            goto start8;
        }
        
    }
     else if (mem9 == 5) {
        
        if(fi == " "){
        fi = "O";
        } else {
            cout << "that position is already occupied!\n";
            goto start8;
        }
        
    }
     else if (mem9 == 6) {
        
        if(si == " "){
        si = "O";
        } else {
            cout << "that position is already occupied!\n";
            goto start8;
        }
        
    }
     else if (mem9 == 7) {
        
        if(se == " "){
        se = "O";
        } else {
            cout << "that position is already occupied!\n";
            goto start8;
        }
        
    }
     else if (mem9 == 8) {
        
        if(ei == " "){
        ei = "O";
        } else {
            cout << "that position is already occupied!\n";
            goto start8;
        }
        
    }
     else if (mem9 == 9) {
        
        if(ni == " "){
        ni = "O";
        } else {
            cout << "that position is already occupied!\n";
            goto start8;
        }
        
    }

    cout << "[" << no <<"][" << tw << "][" << tr << "] 1 2 3\n";
    cout << "[" << fo << "][" << fi << "][" << si << "] 4 5 6\n";
    cout << "[" << se << "][" << ei << "][" << ni << "] 7 8 9\n";
    cout << "the end\n";
}