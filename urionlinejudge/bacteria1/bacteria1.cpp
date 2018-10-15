// https://www.urionlinejudge.com.br/judge/en/problems/view/2356

#include <bits/stdc++.h>

using namespace std;

int main() {

	string s1,s2;

while(cin>>s1>>s2){

if(s1.find(s2)!=string::npos)

cout<<"Resistente\n";

else

cout<<"Nao resistente\n";

}

	return 0;

}