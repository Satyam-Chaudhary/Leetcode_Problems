class Solution {
public:

    vector<int> generateRow(int row){
        long long ans = 1;
        vector<int> temp;
        temp.push_back(ans);
        for(int col = 1; col < row; col++){
            ans = ans * (row - col);
            ans = ans / col;
            temp.push_back(ans);
        }
        return temp;
    }

    vector<vector<int>> generate(int numRows) {
       vector<vector<int>> result;
       for(int i = 1; i <= numRows; i++){
           result.push_back(generateRow(i));
       }
       return result;
    }
};