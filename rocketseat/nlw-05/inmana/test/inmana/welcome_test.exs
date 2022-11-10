defmodule Inmana.WelcomeTest do
  use ExUnit.Case, async: true

  alias Inmana.Welcomer

  describe "welcome/1" do
    test "when the user is special, returns a special message" do
      params = %{"name" => "abe", "age" => "19"}
      expected = {:ok, "Welcome back abe!"}

      result = Welcomer.welcome(params)

      assert result == expected
    end

    test "when the user is not special, returns a message" do
      name = "eba"
      params = %{"name" => name, "age" => "19"}
      expected = {:ok, "Welcome #{name}"}

      result = Welcomer.welcome(params)

      assert result == expected
    end

    test "when the user is under age, returns an error" do
      params = %{"name" => "abe", "age" => "17"}
      expected = {:error, "You shall not pass"}

      result = Welcomer.welcome(params)

      assert result == expected
    end
  end
end
