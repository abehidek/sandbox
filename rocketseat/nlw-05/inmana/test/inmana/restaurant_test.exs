defmodule Inmana.RestaurantTest do
  use Inmana.DataCase, async: true

  alias Ecto.Changeset
  alias Inmana.Restaurant

  describe "changeset/1" do
    test "When all params are valid, returns a valid changeset" do
      params = %{name: "McDonalds", email: "mc@donalds.com"}

      result = Restaurant.changeset(params)

      assert %Changeset{
               changes: %{
                 email: "mc@donalds.com",
                 name: "McDonalds"
               },
               valid?: true
             } = result
    end

    test "When there are invalid params, returns an invalid changeset" do
      params = %{name: 12, email: "mc"}
      expected = %{email: ["has invalid format"], name: ["is invalid"]}

      result = Restaurant.changeset(params)

      assert %Changeset{valid?: false} = result

      assert errors_on(result) == expected
    end
  end
end
