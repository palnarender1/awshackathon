package com.amazonaws.lambda.demo;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;
import com.amazonaws.services.lambda.runtime.Context;

public class InventoryDAO {

	public boolean deleteInventory(Integer id, Context context){
		Connection conn = null;
		Statement stmt = null;
		try {
		Class.forName("com.mysql.cj.jdbc.Driver").newInstance();
		conn = DriverManager.getConnection(
				"jdbc:mysql://ffidb.ckzplq92bcuo.us-east-2.rds.amazonaws.com:3306/ffi", "admin", "Admin123");
		stmt = conn.createStatement();

		stmt.executeUpdate("delete FROM INVENTORY where ID="+ id);
		System.out.println("Record " + id + " deleted successfully");
		stmt.close();
		conn.close();
		}catch(Exception e) {
			context.getLogger().log(e.toString());
			e.printStackTrace();
			return false;
		}finally {
			if(stmt != null) {
				try {
					stmt.close();
				} catch (SQLException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}
			if(conn != null) {
				try {
					conn.close();
				} catch (SQLException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}
		}

		return true;
	}
	
}
