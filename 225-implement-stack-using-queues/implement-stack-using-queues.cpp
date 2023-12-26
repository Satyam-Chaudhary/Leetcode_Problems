class MyStack {
    queue<int> q1;
    queue<int> q2;
public:

    MyStack() {
        
    }
    
    void push(int x) {
        
            while(!q1.empty()){
                int e = q1.front();
                q1.pop();
                q2.push(e);
            }
            q1.push(x);
            while(!q2.empty()){
                q1.push(q2.front());
                q2.pop();
            }
        }
    
    
    int pop() {
        int e = q1.front();
        q1.pop();
        return e;
    }
    
    int top() {
        return q1.front();
    }
    
    bool empty() {
        return q1.empty();
    }
};

/**
 * Your MyStack object will be instantiated and called as such:
 * MyStack* obj = new MyStack();
 * obj->push(x);
 * int param_2 = obj->pop();
 * int param_3 = obj->top();
 * bool param_4 = obj->empty();
 */