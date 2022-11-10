defmodule InmanaWeb.RestaurantsControllerTest do
  use InmanaWeb.ConnCase, async: true

  describe "create/2" do
    test "When all params are valid, creates the user", %{conn: conn} do
      params = %{name: "McDonalds", email: "mc@donalds.com"}

      response =
        conn
        |> post(Routes.restaurants_path(conn, :create, params))
        |> json_response(:created)

      assert %{
               "message" => "Restaurant created!",
               "restaurant" => %{
                 "email" => "mc@donalds.com",
                 "id" => _id,
                 "name" => "McDonalds"
               }
             } = response
    end

    test "When there are invalid params, returns an error", %{conn: conn} do
      params = %{email: "mc@donalds.com"}
      expected = %{"message" => %{"name" => ["can't be blank"]}}

      response =
        conn
        |> post(Routes.restaurants_path(conn, :create, params))
        |> json_response(:bad_request)

      assert response == expected
    end
  end
end
