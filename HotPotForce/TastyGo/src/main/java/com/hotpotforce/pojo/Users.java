package com.hotpotforce.pojo;




public class Users {
    private Long ID;
    private String username;
    private String password;
    private String Email;

    private String nationality;

    public Users(Long ID, String username, String password) {
        this.ID = ID;
        this.username = username;
        this.password = password;
    }

    public Users(Long ID, String username, String password, String email) {
        this.ID = ID;
        this.username = username;
        this.password = password;
        Email = email;
    }

    public Users() {
    }

    public String getNationality() {
        return nationality;
    }

    public void setNationality(String nationality) {
        this.nationality = nationality;
    }

    public Long getID() {
        return ID;
    }

    public void setID(Long ID) {
        this.ID = ID;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return Email;
    }

    public void setEmail(String email) {
        Email = email;
    }

    @Override
    public String toString() {
        return "Users{" +
                "ID=" + ID +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", Email='" + Email + '\'' +
                ", nationality='" + nationality + '\'' +
                '}';
    }
}
