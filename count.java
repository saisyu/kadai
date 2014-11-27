import java.io.IOException;
import java.io.PrintWriter;
import java.util.ResourceBundle;
import java.math.BigDecimal;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class count extends HttpServlet {

    public void doGet(HttpServletRequest request, HttpServletResponse response)
       throws IOException, ServletException
       {
          response.setContentType("text/html");
          PrintWriter out = response.getWriter();

          String x = request.getParameter("a");
          String y = request.getParameter("b");
          String z = request.getParameter("ca");

          BigDecimal a = new BigDecimal(x);
          BigDecimal b = new BigDecimal(y);
          char c = z.charAt(0);

      if(c == 't'){
    double val1 = a.add(b).doubleValue();
    out.println(val1);
    }
    else if(c == 'm'){
    double val2 = a.subtract(b).doubleValue();
    out.println(val2);
    }
    else if(c == 'x'){
    double val3 = a.multiply(b).doubleValue();
    out.println(val3);
    }
    else if(c == 'w'){
    double val4 = a.divide(b, 8, BigDecimal.ROUND_HALF_UP).doubleValue();
    out.println(val4);
    }
  }
}



