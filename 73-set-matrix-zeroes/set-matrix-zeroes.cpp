class Solution {
public:
    const int MARKER = -2147483641;
    void markRow(int i, int m , vector<vector<int>> &matrix){
        for(int j = 0; j < m ; j++){
            if(matrix[i][j] != 0){
                matrix[i][j] = MARKER;
            }
        }
    }

    void markCol(int j, int n , vector<vector<int>> &matrix){
        for(int i = 0; i < n; i++){
            if(matrix[i][j] != 0){
                matrix[i][j] = MARKER;
            }
        }
    }

    void setZeroes(vector<vector<int>>& matrix) {
        int n = matrix.size();
        int m = matrix[0].size();
        for(int i = 0; i < n ; i++){
            for(int j = 0;  j< m; j++){
                if(matrix[i][j] == 0){
                    markRow(i, m, matrix);
                    markCol(j,n , matrix); 
                }
            }
        }

        for(int i = 0; i < n ; i++){
            for(int j = 0;  j< m; j++){
                if(matrix[i][j] == MARKER){
                    matrix[i][j] = 0;
                }
            }
        }

        for(int i = 0; i < n ; i++){
            for(int j = 0;  j< m; j++){
                cout << matrix[i][j] << " ";
            }
            }
    }
};