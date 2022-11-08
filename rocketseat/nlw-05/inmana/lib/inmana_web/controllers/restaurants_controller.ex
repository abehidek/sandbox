defmodule InmanaWeb.RestaurantsController do
  use InmanaWeb, :controller

  alias Inmana.{Restaurants.Create, Restaurant}

  def create(conn, params) do
    with {:ok, %Restaurant{} = restaurant} <- Create.call(params) do
      conn |> put_status(:ok) |> render("create.json", restaurant: restaurant)
    end
  end
end
